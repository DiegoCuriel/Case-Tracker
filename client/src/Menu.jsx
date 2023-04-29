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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '3px' }}>
          <p>Id:</p>
          <input value={id} onChange={(e) => setId(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Nombre:</p>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Descripción:</p>
          <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Precio:</p>
          <input value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Probabilidad:</p>
          <input value={probabilidad} onChange={(e) => setProbabilidad(e.target.value)}></input>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '3px' }}>
          <p>Numero Skins:</p>
          <input value={skins_disponibles} onChange={(e) => setSkinsDisponibles(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Fecha:</p>
          <input value={fecha_lanzamiento} onChange={(e) => setFechaLanzamiento(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p>Rareza:</p>
          <input value={rareza} onChange={(e) => setRareza(e.target.value)}></input>
        </div>
        <div>
          <p>Imagen URL:</p>
          <input value={imagen_url} onChange={(e) => setImagenUrl(e.target.value)}></input>
        </div>
      </div>
      <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <button onClick={handleUpdateCase}>Actualizar Caja</button>
        </div>
        <div style={{ marginRight: '10px' }}>
          <button onClick={handleCreateCase}>Crear Caja</button>
        </div>
        <div style={{ marginRight: '10px' }}>
          <button onClick={handleDeleteCase}>Borrar Caja</button>
        </div>
      </div>
    </div>
  );
}
