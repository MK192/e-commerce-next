export default async function getItems() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}
