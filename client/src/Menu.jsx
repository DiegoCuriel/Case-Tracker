import React, { useState } from 'react';

export default function Menu() {
  const [id, setId] = useState('');
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [probabilidad, setProbabilidad] = useState('');
  const [skins_disponibles, setSkinsDisponibles] = useState('');
  const [fecha_lanzamiento, setFechaLanzamiento] = useState('');
  const [rareza, setRareza] = useState('');
  const [imagen_url, setImagenUrl] = useState('');

  const handleUpdateCase = async () => {
    try {
      const response = await fetch(`/updateCase/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          probabilidad,
          skins_disponibles,
          fecha_lanzamiento,
          rareza,
          imagen_url
        })
      });
      const data = await response.json();
      console.log(data);
      // Hacer algo con la respuesta de la API
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateCase = async () => {
    try {
      const response = await fetch('/createCase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          descripcion,
          precio,
          probabilidad,
          skins_disponibles,
          fecha_lanzamiento,
          rareza,
          imagen_url
        })
      });
      const data = await response.json();
      console.log(data);
      // Hacer algo con la respuesta de la API
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCase = async () => {
    try {
      const response = await fetch(`/deleteCase/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
      // Hacer algo con la respuesta de la API
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <p>Menu: </p>
      <div>
        <p>Id de la caja a modificar:</p>
        <input value={id} onChange={(e) => setId(e.target.value)}></input>
      </div>
      <div>
        <p>Nombre:</p>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
      </div>
      <div>
        <p>Descripción:</p>
        <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
      </div>
      <div>
        <p>Precio:</p>
        <input value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
      </div>
      <div>
        <p>Probabilidad:</p>
        <input value={probabilidad} onChange={(e) => setProbabilidad(e.target.value)}></input>
      </div>
      <div>
        <p>Skins Disponibles:</p>
        <input value={skins_disponibles} onChange={(e) => setSkinsDisponibles(e.target.value)}></input>
      </div>
      <div>
        <p>Fecha de Lanzamiento:</p>
        <input value={fecha_lanzamiento} onChange={(e) => setFechaLanzamiento(e.target.value)}></input>
      </div>
      <div>
        <p>Rareza:</p>
        <input value={rareza} onChange={(e) => setRareza(e.target.value)}></input>
      </div>
      <div>
        <p>Imagen URL:</p>
        <input value={imagen_url} onChange={(e) => setImagenUrl(e.target.value)}></input>
      </div>
      <div>
        <button onClick={handleUpdateCase}>Actualizar Datos</button>
      </div>
      <div>
        <button onClick={handleCreateCase}>Crear Nueva Caja</button>
      </div>
      <div>
        <button onClick={handleDeleteCase}>Borrar Caja</button>
      </div>
    </div>
  );
}
