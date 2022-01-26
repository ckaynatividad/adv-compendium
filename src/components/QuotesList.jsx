import React from 'react';

export default function QuotesList({ quotes }) {

  return (
    <div>
      {quotes.map((quote) => (
        <div key={quote.id}>
          <h4>{quote.name}</h4>
          <p>{quote.brand}</p>
 
        </div>
      ))}
    </div>
  );
}
