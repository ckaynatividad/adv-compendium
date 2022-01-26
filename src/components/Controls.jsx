
import React from 'react';

export default function Controls({ setBrand, handleSubmit }) {
  return (
    <div>
      <label>filter by brand</label>
      <select onChange={(e) => setBrand(e.target.value)}>
        <option> </option>
        <option>colourpop</option>
      </select>
      <button onClick={handleSubmit}>go</button>
    </div>
  );
}
