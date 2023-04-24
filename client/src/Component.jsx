import React, { useState, useEffect } from 'react';

export default function Component() {
  const [text, setText] = useState('');
  const [update, setUpdate] = useState('');
  const [data, setData] = useState('');

  const textOnChange = (event) => {
    setText(event.target.value);
  };

  const buttonOnClick = () => {
    setUpdate(text);
  };

  useEffect(() => {
    fetch('/api/album') // Reemplaza la URL con la ruta correcta de tu API
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <input type="text" value={text} onChange={textOnChange} />
      <button onClick={buttonOnClick}>Actualizar</button>
      <p>Escribiendo... {text}</p>
      <p>Texto: {update}</p>
      {data && Object.keys(data).map((key) => (
        <div key={key}>
          <h3>{data[key].name}</h3>
          <p>Tipo: {data[key].type}</p>
          <p>Artista: {data[key].artist}</p>
          <p>Año: {data[key].year}</p>
          <p>ID: {data[key].id}</p>
        </div>
      ))}
    </div>
  );
}
