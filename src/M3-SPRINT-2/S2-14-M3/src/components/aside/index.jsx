import { StyledAside } from "./style";

export function Aside({ cart, productId, removeAll }) {
  function totalMoney() {
    let total = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return total;
  }

  return (
    <StyledAside>
      <div className="aside-title-container">
        <h1>Carrinho de compras</h1>
      </div>
      {cart.length > 0 ? (
        <div className="aside-full-cart-container">
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <div className="cart-product-img-info">
                  <div className="cart-product-img">
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div className="cart-product-info">
                    <p>{product.name}</p>
                    <p>{product.category}</p>
                  </div>
                </div>
                <button
                  className="cart-product-remove-button"
                  onClick={() => productId(product.id)}
                >
                  Remover
                </button>
              </li>
            ))}
          </ul>
          <div className="total-value-container">
            <div className="total-value-info-container">
              <p>Total</p>
              <p>{`R$ ${totalMoney().toFixed(2)}`}</p>
            </div>
            <button onClick={() => removeAll()}>Remover todos</button>
          </div>
        </div>
      ) : (
        <div className="aside-empty-cart-container">
          <h1>Sua sacola está vazia</h1>
          <p>Adicione itens</p>
        </div>
      )}
    </StyledAside>
  );
}
