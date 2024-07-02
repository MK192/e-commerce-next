export default async function getSingleItem(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}
