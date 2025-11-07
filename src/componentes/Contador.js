import React, { useState, useEffect } from 'react';

function Acciones() {
  // Contador automático
  const [autoCounter, setAutoCounter] = useState(0);

  // Contador manual
  const [manualCounter, setManualCounter] = useState(0);

  // Efecto para incrementar automáticamente cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("*");
      setAutoCounter((prev) => prev + 1);
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, []);

  // Funciones para el contador manual
  const changeValue = (value) => {
    setManualCounter((current) => current + value);
  };

  const resetValue = () => {
    setManualCounter(0);
  };

  return (
    <div className="contador">
        <h1>HOME PAGE</h1>
        <h2>Fundamentos</h2>
        <p>Sebastian Cabrera, Diana Avila</p>
    </div>
  );
}

export default Acciones;
