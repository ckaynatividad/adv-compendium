import React, { useEffect, useState } from 'react';
import Controls from '../components/Controls';
import MakeupsList from '../components/MakeupsList';
import { getMakeups, searchBrands } from '../services/makeups';

export default function Makeups() {
  const [makeups, setMakeups] = useState([]);
  const [brand, setBrand] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMakeups();
      const newData = [...new Set(data)];
      setMakeups(newData);
      setLoading(false);
    };
    fetchData();
  }, []);
//


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const filterList = await searchBrands(brand);
    const newData = [...new Set(filterList)];
    setMakeups(newData);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : ( 
        <><Controls setBrand={setBrand} handleSubmit={handleSubmit} /><MakeupsList makeups={makeups} /></>
    
      )
      }</div>    
    
  );
}
