
import React from 'react';

export default function Controls({ setBrand, handleSubmit }) {
  
  return (
    <div>
      <label>filter</label>
      <select name='filter' onChange={(e) => setBrand(e.target.value)}>
        <option> </option>
        <option>deciem</option>
        <option>pure anada</option>
      </select>
      <button onClick={handleSubmit}>go</button>
    </div>
  );
}
