import React, { useState, useEffect } from 'react';

export default function Cases() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/getCases') // Reemplaza la URL con la ruta correcta de tu API
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {/* Iterar sobre los datos del JSON y mostrarlos en pantalla */}
      {data.map((caseItem, index) => (
        <div key={index}>
          <h2>{caseItem.nombre}</h2>
          <img src={caseItem.imagen_url} alt={caseItem.nombre} />
          <p>Precio: {caseItem.precio}</p>
        </div>
      ))}
    </div>
  );
}
