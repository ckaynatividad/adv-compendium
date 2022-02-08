import React, { useState } from 'react';
import Controls from '../components/Controls';
import MakeupsList from '../components/MakeupsList';
import { useMakeups } from '../context/MakeupContext';
// import { searchBrands } from '../services/makeups';

export default function Makeups() {
  const { makeups } = useMakeups();
  const [setBrand] = useState('');

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // setLoading(true);
  //   const filterList = await searchBrands(brand);
  //   const newData = [...new Set(filterList)];
  //   // setMakeups(newData);
  //   // setLoading(false);
  // };

  return (
    <div>
      <>
        <Controls setBrand={setBrand} />
        <MakeupsList makeups={makeups} />
      </>
    </div>
  );
}
