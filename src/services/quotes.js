export async function getQuotes() {
  const resp = await fetch(
    'https://animechan.vercel.app/api/quotes'
  );
  const data = await resp.json();
  return data;
}