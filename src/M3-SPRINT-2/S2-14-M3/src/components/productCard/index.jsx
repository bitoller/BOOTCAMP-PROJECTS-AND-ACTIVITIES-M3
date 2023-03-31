import { StyledProductCard } from "./style";

export function ProductCard({ product, productId }) {
  return (
    <StyledProductCard>
      <div className="img-big-container">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="info-container">
        <h1>{product.name}</h1>
        <p>{product.category}</p>
        <p>R$ {product.price.toFixed(2)}</p>
        <button
          id="add-to-cart-button"
          className="green-button"
          onClick={() => productId(product.id)}
        >
          Adicionar
        </button>
      </div>
    </StyledProductCard>
  );
}
