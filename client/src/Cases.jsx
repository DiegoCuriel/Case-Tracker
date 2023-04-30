import React, { useState, useEffect } from 'react';

export default function Cases() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api-five-eosin.vercel.app/getCases')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const groupedData = data.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 2);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div>
      {}
      {groupedData.map((caseGroup, groupIndex) => (
        <div key={groupIndex} style={{ display: 'flex' }}>
          {}
          {caseGroup.map((caseItem, itemIndex) => (
            <div key={itemIndex} style={{ flex: 1 }}>
              <h2>ID: {caseItem.id} | {caseItem.nombre}</h2>
              <img src={caseItem.imagen_url} alt={caseItem.nombre} />
              <p>Fecha de lanzamiento: {caseItem.fecha_lanzamiento}</p>
              <p>Precio: {caseItem.precio} - ROI: {caseItem.probabilidad}</p>
              <p>Best Item: {caseItem.rareza}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
