import { IProduct } from "./iProduct";

export interface ICartContext {
  getProducts: () => Promise<void>;
  products: IProduct[];
  addToCart: (product: IProduct) => void;
  cart: IProduct[];
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  filterProducts: (search: string) => void;
}
