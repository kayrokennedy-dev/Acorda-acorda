import React, { useEffect, useState } from 'react';
import gatinho from './assets/gatinho.png'
import './App2.css'
import { useNavigate } from 'react-router-dom';
import Alarme from './Alarmes';

function App2() {

    const navigate = useNavigate();

    const [hora, setHora] = useState('00:');
    const [minuto, setMinuto] = useState('00:');
    const [segundo, setSegundo] = useState('00');

    const [dia, setDia] = useState ('');
    const [numero, setNumero] = useState ('');
    const [mes, setMes] = useState ('');

    const [alarme, setAlarme] = useState(null);

    const [disparar, setDisparar] = useState(false);


    useEffect(() => {

        const alarmeBuscado = localStorage.getItem('alarmeSalvo');
        let alarmeMemo = null;

        if(alarmeBuscado) {
            alarmeMemo = JSON.parse(alarmeBuscado);
            setAlarme(alarmeMemo);
        }

        const atualizarTempo = () => {
            const dateToday = new Date();
            let hr = dateToday.getHours();
            let min = dateToday.getMinutes();
            let s = dateToday.getSeconds();


            const hrPura = hr < 10 ? '0' + hr : String(hr);
            const minPura = min < 10 ? '0' + min : String(min);


            if(hr < 10) hr = '0' + hr;
            if(min < 10) min = '0' + min;
            if(s < 10) s = '0' + s;

            setHora(hr + ':');
            setMinuto(min + ':');
            setSegundo(s);

            const diasDasemana =['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Sexta-feira', 'Sábado'];
            const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho', 'Agosto', 'Setembro', 'Novenbro', 'Desembro' ];

            setDia(diasDasemana[dateToday.getDay()]);
            setNumero(dateToday.getDate());
            setMes(meses[dateToday.getMonth()]);

            if(alarmeMemo) {
                const horaAlarme = String(alarmeMemo.hora).trim();
                const minutoAlarme = String(alarmeMemo.minuto).trim();

                if (hrPura === horaAlarme && minPura === minutoAlarme) {
                    if (!disparar) {
                        alert("ACORDA, ACORDA! O alarme está tocando!");
                        setDisparar(true);
                    }
                }
                else {
                    setDisparar(false);
                }
            }

        };
    
        atualizarTempo();

        const relogio = setInterval(atualizarTempo, 1000);


        return () => clearInterval(relogio);
    }, [disparar]);


    const excluirAlarme = () => {

            localStorage.removeItem('alarmeSalvo');

            setAlarme(null);

            setDisparar(null);
            
            alert("Alarme excluido com sucesso!!");
    }

    const irParaAdcionar = () => {
        navigate('/Alarmes');
    }
    
    return (
        <div id='body'>
            <div id='area-relogio'>
                <span id='horas'>{hora}</span>
                <span id='minutos'>{minuto}</span>
                <span id='segundos'>{segundo}</span>

                <div id='data'>
                    <span id='dia'>{dia}, </span>
                    <span id='numero'>{numero} de </span>
                    <span id='mês'>{mes}</span>
                </div>
            </div>
            <div id='container-gato'>
                <img src={gatinho} alt="" id='cat-main'/>
            </div>
            <div id='alarmes'>
                {alarme && alarme.hora ? (
                    <div id='card-alarme'>
                        <span id='bolinha-dia'></span>
                        <h2>{alarme.hora} : {alarme.minuto}</h2>
                        <button id='excluir' onClick={excluirAlarme}>Excluir</button>             
                    </div>
                ) : (
                    <span id='sem-alarme'>Sem alarmes no momento</span>
                )}
                <button id='adicionar' onClick={irParaAdcionar}>Adicionar</button>
            </div>
        </div>
    );
}

export default App2;