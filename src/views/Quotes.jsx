import React, { useEffect, useState } from 'react';
import Controls from '../components/Controls';
import QuotesList from '../components/QuotesList';
import { getQuotes, searchBrands } from '../services/quotes';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [brand, setBrand] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes();
      const newData = [...new Set(data)];
      setQuotes(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const filterList = await searchBrands(brand);
    const newData = [...new Set(filterList)];
    setQuotes(newData);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : ( 
        <><Controls setBrand={setBrand} handleSubmit={handleSubmit} />
          <QuotesList quotes={quotes} />
        </>
      )
      }</div>    
    
  );
}
