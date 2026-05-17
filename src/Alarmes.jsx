import React, { useState } from "react";
import './Alarmes.css';
import gatinho from './assets/gatinho.png'
import Arrow from './assets/Arrow left.png'
import { useNavigate } from "react-router-dom";

function Alarme () {

    const navigate = useNavigate();

    const [horas, setHoras] = useState('00:');
    const [minutos, setMinutos] = useState('00:');
    const [segundos, setSegundos] = useState('00');

    const salvarAlarme = () => {
        const novoAlarme = {
            hora: String(horas).replace(':', '').trim(),
            minuto: String(minutos).replace(':', '').trim(),
            segundo: String(segundos).replace(':', '').trim(),
        };

        localStorage.setItem('alarmeSalvo', JSON.stringify(novoAlarme));

        alert("Alarme salvo com Sucesso!");

        navigate('/home');
    };


    const voltar = () => {
        navigate('/home');
    };

    return(
        <div id="body">
            <div id="area-gato">
                <button id="arrow" onClick={voltar}>
                    <img src={Arrow} alt="" />
                </button>
                <img src={gatinho} alt="" id="cat-editar"/>
            </div>
            <div id="edição">
                <div id="relogio-edi">
                    <input id="hora" type="number" placeholder="00:" min="0" max="23" value={horas} onChange={(e) => setHoras(e.target.value)}/>
                    <input id="minuto" type="number" placeholder="00:" min="0" max="59" value={minutos} onChange={(e) => setMinutos(e.target.value)}/>
                    <input id="segundo" type="number" placeholder="00" min="0" max="59" value={segundos} onChange={(e) => setSegundos(e.target.value)}/>
                </div>
                <button id="salvar" onClick={salvarAlarme}>Salvar</button>
            </div>
        </div>
    )
}

export default Alarme;