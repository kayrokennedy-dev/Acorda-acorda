import React from "react";
import './Relaxa.css';
import { useNavigate } from "react-router-dom";
import { CiAlarmOn } from "react-icons/ci";
import { TbZzz } from "react-icons/tb";

function Relaxa () {

    const navigate = useNavigate();



    const voltarparahome = () => {
        navigate('/home')
    };

    const irparacronometro = () => {
        navigate('/cronometros')
    };


    return(
        <div id="body-Relaxa">
            <h1 id="titulo-relx">Ouça sons relaxantes para dormir.</h1>
            <div id="container-cards">
                <div id="mix">
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/pWjmpSD-ph0?si=Iju6l1Wu5Jo_E9J6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/EEKLlS2H0cI?si=rrDRkY6W7YJWD7j2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/iXFT0Kdfoig?si=5eS4yyo-wzrQx-D5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/2AH5t_o7lmg?si=qrPd0rrG9d5q7-zq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/umYE_5LYg5I?si=YJDt3DBqFSx4Dhqm" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/0TNMyHDSu0c?si=wf9kFQBaIRRh5Rzl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/CoR0v-pHmmU?si=ulEOr4VjPRdNlHOG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/JyT6Xvijtis?si=FreUEnmFzGkgchGo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/N_kxpJBObLI?si=UDOagGQf9x26wEop" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div id="mix">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/hFxCDbiPWJk?si=REXXxcayYlS-Qvon" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>

            <div id='menu'>
                <button id='cronometro'><CiAlarmOn /></button>
                <button id='adicionar-' onClick={voltarparahome}>alarmes</button>
                <button id='rlx' onClick={irparacronometro}><TbZzz /></button>
            </div>
        </div>
    )
}
export default Relaxa;