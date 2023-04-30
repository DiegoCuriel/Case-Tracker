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
      const response = await fetch(`https://api-five-eosin.vercel.app/updateCase/${id}`, {
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
      const response = await fetch('https://api-five-eosin.vercel.app/createCase', {
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
      const response = await fetch(`https://api-five-eosin.vercel.app/deleteCase/${id}`, {
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
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Id:</p>
          <input className='inputValue' value={id} onChange={(e) => setId(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Nombre:</p>
          <input className='inputValue' value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Descripción:</p>
          <input className='inputValue' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Precio:</p>
          <input className='inputValue' value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>ROI:</p>
          <input className='inputValue' value={probabilidad} onChange={(e) => setProbabilidad(e.target.value)}></input>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Numero Skins:</p>
          <input className='inputValue' value={skins_disponibles} onChange={(e) => setSkinsDisponibles(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Fecha:</p>
          <input className='inputValue' value={fecha_lanzamiento} onChange={(e) => setFechaLanzamiento(e.target.value)}></input>
        </div>
        <div style={{ marginRight: '3px' }}>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Best Item:</p>
          <input className='inputValue' value={rareza} onChange={(e) => setRareza(e.target.value)}></input>
        </div>
        <div>
          <p style={{ marginBottom: '3px', marginTop: '40px' }}>Imagen URL:</p>
          <input className='inputValue' value={imagen_url} onChange={(e) => setImagenUrl(e.target.value)}></input>
        </div>
      </div>
      <div style={{ marginTop: '40px', marginBottom: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ marginRight: '10px' }}>
          <button
            className="update-button"
            onClick={handleUpdateCase}>Actualizar Caja
          </button>
        </div>
        <div style={{ marginRight: '10px' }}>
          <button
            className="update-button"
            onClick={handleCreateCase}>Crear Caja
          </button>
        </div>
        <div style={{ marginRight: '10px' }}>
          <button
            className="update-button"
            onClick={handleDeleteCase}>Borrar Caja
          </button>
        </div>
      </div>
    </div>
  );
}
