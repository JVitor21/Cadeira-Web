import React, { useState, useEffect } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
    if (ativo) {
      const intervalo = setInterval(() => {
        setContador((prev) => prev + 1);
      }, 1000);

      return () => clearInterval(intervalo);
    }
  }, [ativo]);

  const pararContador = () => {
    setAtivo(false);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={pararContador}>Parar Contador</button>
    </div>
  );
}

export default Contador;
