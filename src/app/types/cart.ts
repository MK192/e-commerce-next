export type CartItemsType = {
  id: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
  title: string;
  price: number;
  description: string;
  quantity: number;
};
