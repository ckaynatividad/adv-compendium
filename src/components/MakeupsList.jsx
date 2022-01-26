import React from 'react';

export default function MakeupsList({ makeups }) {

  return (
    <div>
      {makeups.map((makeup) => (
        <div key={makeup.id}>
          <h4>{makeup.name}</h4>
          <p>{makeup.brand}</p>
 
        </div>
      ))}
    </div>
  );
}
