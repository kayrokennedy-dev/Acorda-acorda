import React, { useState, useEffect } from "react";
import './cronometro.css';
import gatinho from './assets/gatinho.png';
import { CiAlarmOn } from "react-icons/ci";
import { TbZzz } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function Cronometro () {

    
    const [inputHora, setInputHora] = useState("");
    const [inputMinuto, setInputMinuto] = useState("");
    const [inputSegundo, setInputSegundo] = useState("");

    const [tempoRestante, setTempoRestante] = useState(0);

    const [estaRodando, setEstaRodando] = useState(false);

    useEffect(() => {
        let intervalo = null;

        if (estaRodando && tempoRestante > 0) {
            intervalo = setInterval(() => {
                setTempoRestante((tempoAnterior) => tempoAnterior - 1);
            }, 1000);
        } else if (tempoRestante === 0 && estaRodando) {
            // O tempo acabou!
            setEstaRodando(false);
            alert("BIIIIP BIIIIP! O tempo do cronômetro acabou!");
        }

        // Limpa o intervalo ao pausar ou desmontar a tela
        return () => clearInterval(intervalo);
    }, [estaRodando, tempoRestante]);

    // Função que converte as horas/minutos/segundos digitados em segundos totais e inicia
    const iniciarCronometro = () => {
        const h = parseInt(inputHora) || 0;
        const m = parseInt(inputMinuto) || 0;
        const s = parseInt(inputSegundo) || 0;

        const totalSegundos = (h * 3600) + (m * 60) + s;

        if (totalSegundos <= 0) {
            alert("Por favor, insira um tempo maior que zero!");
            return;
        }

        setTempoRestante(totalSegundos);
        setEstaRodando(true);
    };

    const pausarRetomar = () => {
        setEstaRodando(!estaRodando);
    };

    const zerarCronometro = () => {
        setEstaRodando(false);
        setTempoRestante(0);
        setInputHora("");
        setInputMinuto("");
        setInputSegundo("");
    };

    // Função matemática para transformar os segundos totais de volta no formato 00:00:00 para exibir na tela
    const formatarTempo = () => {
        const h = Math.floor(tempoRestante / 3600);
        const m = Math.floor((tempoRestante % 3600) / 60);
        const s = tempoRestante % 60;

        const hFormatada = h < 10 ? `0${h}` : h;
        const mFormatado = m < 10 ? `0${m}` : m;
        const sFormatado = s < 10 ? `0${s}` : s;

        return `${hFormatada}:${mFormatado}:${sFormatado}`;
    };

    
    const navigate = useNavigate();

    const voltarparahome = () => {
        navigate ('/home')
    };

    const irparaRelaxa = () => {
        navigate ('/Relaxa')
    }

    return(
        <div id="body-cronometro">
            <div id="cronometro-gato">
                <img id="cat-crono" src={gatinho} alt="" />
            </div>
            <div id="area-cronometro">
                
                {!estaRodando && tempoRestante === 0 ? (
                    <div id="cronometro">
                        <input 
                            type="number" 
                            placeholder="00" 
                            value={inputHora}
                            onChange={(e) => setInputHora(e.target.value)}
                        />:
                        <input 
                            type="number" 
                            placeholder="00"
                            value={inputMinuto}
                            onChange={(e) => setInputMinuto(e.target.value)}
                        />:
                        <input 
                            type="number" 
                            placeholder="00"
                            value={inputSegundo}
                            onChange={(e) => setInputSegundo(e.target.value)}
                        />
                    </div>
                ) : (

                    <div id="tempo-rodando">
                        <h1>{formatarTempo()}</h1>
                    </div>
                )}

                <div id="botoes-controle">
                    {!estaRodando && tempoRestante === 0 ? (
                        <button className="btn-crono" onClick={iniciarCronometro}>Iniciar</button>
                    ) : (
                        <>
                            <button className="btn-crono" onClick={pausarRetomar}>
                                {estaRodando ? "Pausar" : "Retomar"}
                            </button>
                            <button className="btn-crono" onClick={zerarCronometro}>Zerar</button> 
                        </>
                    )}
                </div>
            </div>

            <div id='menu'>
                <button id='cronometro-'><CiAlarmOn /></button>
                <button id='adicionar' onClick={voltarparahome}>alarmes</button>
                <button id='rlx' onClick={irparaRelaxa}><TbZzz /></button>
            </div>
        </div>
    )
}

export default Cronometro;