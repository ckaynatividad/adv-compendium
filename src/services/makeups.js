export async function getMakeups(query) {
  const params = new URLSearchParams();
  params.set('makeups', query);
  const resp = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json'
  );
  const data = await resp.json();
 
  return data;
}

export async function searchBrands(name) {
  const resp = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${name}`
  );
  const data = await resp.json();
  return data;

}