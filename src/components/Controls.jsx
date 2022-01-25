import { Button, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

export default function Controls({ query, setQuery, setLoading, sort, setSort }) {
  return (
    <div>
      <Select value={sort} onChange={(e) => setSort(e.target.value)}>
        <MenuItem value="ascending">A-Z</MenuItem>
        <MenuItem value="descending">Z-A</MenuItem>
      </Select>
    

      <Button variant="contained" onClick={() => setLoading(true)}>Go</Button>
    </div>
  );
}
