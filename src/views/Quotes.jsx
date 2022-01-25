import React, { useEffect, useState } from 'react';
import QuotesList from '../components/QuotesList';
import { getQuotes } from '../services/quotes';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes();
      setQuotes(data);
    };
    fetchData();

  }, []);
  return (
    <div>
      <QuotesList quotes={quotes} />
    </div>);
}
