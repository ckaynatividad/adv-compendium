export async function getMakeups(query) {
  const params = new URLSearchParams();
  params.set('makeups', query);
  const resp = await fetch(
    'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush'
  );
  const data = await resp.json();
  console.log(data);
  return data;
}

export async function searchBrands(name) {
  const resp = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${name}`
  );
  const data = await resp.json();
  return data;

}