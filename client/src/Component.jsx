import React, { useState, useEffect } from 'react';

export default function Component() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/getCases') // Reemplaza la URL con la ruta correcta de tu API
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  const handleUpdateData = () => {
    // Lógica de actualización de datos aquí
    // Por ejemplo, puedes hacer otra petición a la API para actualizar los datos
    fetch('/updateCases') // Reemplaza la URL con la ruta correcta de tu API para la actualización de datos
      .then((res) => res.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      {/* Iterar sobre los datos del JSON y mostrarlos en pantalla */}
      {data.map((caseItem, index) => (
        <div key={index}>
          <h2>{caseItem.nombre}</h2>
          <img src={caseItem.imagen_url} alt={caseItem.nombre} />
          <p>Precio: {caseItem.precio}</p>
          <button onClick={handleUpdateData}>Actualizar Datos</button>
        </div>
      ))}
      {/* Agregar un botón para actualizar datos */}
      
    </div>
  );
}
