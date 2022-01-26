
import { useEffect, useState } from 'react';
import './App.css';
import Controls from './components/Controls';
import QuotesList from './components/QuotesList';
import { getQuotes } from './services/quotes';
import Quotes from './views/Quotes';


function App() {

  
  return (
    <div>
      <header>makeup</header>
      <Quotes />
    </div>
    
  );
}

export default App;
