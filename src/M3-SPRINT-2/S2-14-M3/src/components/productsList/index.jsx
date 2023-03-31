import { ProductCard } from "../productCard";
import { StyledLeftContainer, StyledProductsList } from "./style";

export function ProductsList({
  products,
  productId,
  filteredProducts,
  clearSearch,
  inputValue,
}) {
  return (
    <>
      {filteredProducts.length > 0 ? (
        <StyledLeftContainer>
          <div className="search-result-container">
            <p>
              Resultados para: <span>{inputValue}</span>
            </p>
            <button className="green-button" onClick={() => clearSearch()}>
              Limpar busca
            </button>
          </div>
          <StyledProductsList>
            {filteredProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  productId={productId}
                />
              );
            })}
          </StyledProductsList>
        </StyledLeftContainer>
      ) : (
        <StyledProductsList>
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                productId={productId}
              />
            );
          })}
        </StyledProductsList>
      )}
    </>
  );
}
