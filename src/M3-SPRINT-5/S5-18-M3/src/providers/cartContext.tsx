import { createContext, useState } from "react";
import { ICartContext } from "../interfaces/iCartContext";
import { api } from "../services/api";
import { IProduct } from "../interfaces/iProduct";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { ICartProviderProps } from "../interfaces/iCartProviderProps";

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: ICartProviderProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const response = await api.get("products");
      setProducts(response.data);
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  const addToCart = (product: IProduct) => {
    let item = cart.find((productFound) => productFound.id == product.id);
    if (item) {
      toast.warn(`${item.name} já foi adicionado no carrinho`);
      return;
    }
    setCart([...cart, product]);
    toast.success(`${product.name} foi adicionado ao carrinho`);
  };

  const removeFromCart = (id: number) => {
    let itemId = cart.findIndex((product) => product.id == id);
    if (itemId > -1) {
      const newCart = [...cart];
      newCart.splice(itemId, 1);
      setCart(newCart);
      toast.success("Produto removido com sucesso");
    } else {
      toast.error("Produto não encontrado");
    }
  };

  const removeAllFromCart = () => {
    if (cart.length > 0) {
      setCart([]);
      toast.success("O carrinho foi esvaziado com sucesso");
    }
  };

  const filterProducts = (search: string) => {
    let filteredProductsAux = products.filter(
      (product) =>
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    if (filteredProductsAux.length > 0) {
      setProducts(filteredProductsAux);
    }
  };

  return (
    <CartContext.Provider
      value={{
        products,
        getProducts,
        cart,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        filterProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
