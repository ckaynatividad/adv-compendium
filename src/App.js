
import { useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import { getQuotes } from './services/quotes';
import Quotes from './views/Quotes';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('ascending');
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await getQuotes(sort);
      setQuotes(data.results);
      setLoading(false);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, sort]);

  return (
    <div className="App">
      <h1> Anime Quotes </h1>
      {loading && <p>Retrieving quotes...</p>}
      {!loading && (
        <><Controls setLoading={setLoading} sort={sort} setSort={setSort} /><Quotes quotes={quotes}/></>

      )}
    </div>
  );
}

export default App;
