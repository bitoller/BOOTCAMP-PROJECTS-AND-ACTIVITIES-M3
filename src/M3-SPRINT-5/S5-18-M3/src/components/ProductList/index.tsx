import { useContext, useEffect } from "react";
import { CartContext } from "../../providers/cartContext";
import ProductCard from "./productCard";
import { StyledProductList } from "./style";

function ProductList() {
  const { products, getProducts } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <StyledProductList>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
}

export default ProductList;
