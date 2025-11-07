import React, { useState, useEffect } from 'react';

const Acciones: React.FC = () => {
  const [counter, setCounter] = useState(0);
   const [manualCounter, setManualCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("*");
      setCounter((prev: number) => prev + 1);
    }, 1000);

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  const changeValue = (value: number): void => {
    setCounter((current: number) => current + value);
    setManualCounter((current) => current + value);

  };

  const resetValue = (value: number): void => {
    setCounter(value);
    setManualCounter(0);

  };

  return (
    <div className="contador">
      <h2>Contador: {counter}</h2>
      <h2>Contador manual: {manualCounter}</h2>
      <div className="botones">
        <button onClick={() => changeValue(1)}>Incrementar</button>
        <button onClick={() => changeValue(-1)}>Restar</button>
        <button onClick={() => resetValue(0)}>Reseteo</button>
      </div>
    </div>
  );
};

export default Acciones;