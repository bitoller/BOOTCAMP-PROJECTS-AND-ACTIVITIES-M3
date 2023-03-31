import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Aside } from "./components/aside";
import { Header } from "./components/header";
import { ProductsList } from "./components/productsList";
import { api } from "./services/api";
import { GlobalStyle } from "./styles/globalStyles";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addCart(id) {
    let item = cart.find((product) => product.id == id);
    if (item) {
      toast.warn(`${item.name} já foi adicionado no carrinho`);
      return;
    }
    let product = products.find((product) => product.id == id);
    if (product) {
      setCart([...cart, product]);
      toast.success(`${product.name} foi adicionado ao carrinho`);
    } else {
      toast.error("Produto não encontrado");
    }
  }

  function removeCart(id) {
    let itemId = cart.findIndex((product) => product.id == id);
    if (itemId > -1) {
      const newCart = [...cart];
      newCart.splice(itemId, 1);
      setCart(newCart);
      toast.success("Produto removido com sucesso");
    } else {
      toast.error("Produto não encontrado");
    }
  }

  function removeAllCart() {
    if (cart.length > 0) {
      setCart([]);
      toast.success("O carrinho foi esvaziado com sucesso");
    }
  }

  function search(value) {
    let filteredProductsAux = products.filter(
      (product) =>
        product.category.toLowerCase().includes(value.toLowerCase()) ||
        product.name.toLowerCase().includes(value.toLowerCase())
    );
    if (filteredProductsAux.length > 0) {
      setInputValue(value);
      setFilteredProducts(filteredProductsAux);
    }
  }

  function clearSearch() {
    setFilteredProducts([]);
    setInputValue("");
  }

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await api.get("products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProduct();
  }, []);

  return (
    <div>
      <GlobalStyle />
      <ToastContainer position="bottom-left" />
      <Header search={search} />
      <main>
        <ProductsList
          products={products}
          productId={addCart}
          filteredProducts={filteredProducts}
          clearSearch={clearSearch}
          inputValue={inputValue}
        />
        <Aside cart={cart} productId={removeCart} removeAll={removeAllCart} />
      </main>
    </div>
  );
}

export default App;
