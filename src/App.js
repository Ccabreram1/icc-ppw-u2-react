import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Acciones from './componentes/Acciones';
import Contador from './componentes/Contador';

function App() {
  return (
    <div className="App">
      <Contador />
      <Acciones />
    </div>
  );
}

export default App;
