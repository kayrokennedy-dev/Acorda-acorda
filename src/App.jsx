import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gatinho from './assets/gatinho.png'
import gatinho1 from './assets/gatinho 1.png'
import './App.css'

function App() {

  const navigate = useNavigate();

  const transicao = () => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <>
      <div id='entrada'>
        <h1 id='titulo'>Acorda, Acorda!</h1>
        <img src={gatinho} alt="" id='gatinho' onAnimationEnd={transicao} />
        <img src={gatinho1} alt="" id='lua' />
      </div>
    </>
  )
}

export default App
