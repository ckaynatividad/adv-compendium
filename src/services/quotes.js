export async function getQuotes(query, sort) {
  const params = new URLSearchParams();
  params.set('quotes', query);
  params.set('sort', 'quotes');
  params.set('direction', sort);
 
  const resp = await fetch(
    'https://animechan.vercel.app/api/quotes'
  );
  const data = await resp.json();
  return data;
}
