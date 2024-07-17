import React, { useState, useEffect } from 'react';
import './WindowSize.css'

function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const sizeScreen = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('size', sizeScreen);
    
    return () => {
      window.removeEventListener('size', sizeScreen);
    };
  }, []); 

  return (
    <div className='sizedScreen'>
      <span>      <p>Desafio 1 - Exercicio 2</p>
      </span>
      <h1>Largura da Janela</h1>
      <p>A largura atual da janela é: {windowWidth}px</p>
    </div>
  );
}

export default WindowSize;
