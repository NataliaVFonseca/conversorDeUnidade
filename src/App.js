import React, {useEffect, useState} from 'react';
import './App.css';
import './components/logicTest';
import ListaUnidades from './components/unidadeConv';

function App() {
  return (
    <div className="App">
      <header>
        <h1> Conversor de Medidas</h1>
        <p>Escolha a unidade de conversão</p>
        <ListaUnidades className="lista"/>
      </header>
    </div>
  );
}

export default App;
