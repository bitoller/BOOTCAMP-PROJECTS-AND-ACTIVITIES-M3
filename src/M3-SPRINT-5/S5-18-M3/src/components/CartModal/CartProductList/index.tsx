import CartProductCard from "./CartProductCard";
import { StyledCartProductList } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph } from "../../../styles/typography";
import { useContext } from "react";
import { CartContext } from "../../../providers/cartContext";

function CartProductList() {
  const { cart, removeAllFromCart } = useContext(CartContext);

  const totalMoney = () => {
    let total = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    );
    return total.toFixed(2);
  };

  return (
    <StyledCartProductList>
      <ul>
        {cart?.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className="total">R$ {totalMoney()}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={removeAllFromCart}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
}

export default CartProductList;
