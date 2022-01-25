export async function getNekos() {
  const resp = await fetch(
    'https://nekos.best/api/v1/nekos'
  );
  const data = await resp.json();
  return data;
}