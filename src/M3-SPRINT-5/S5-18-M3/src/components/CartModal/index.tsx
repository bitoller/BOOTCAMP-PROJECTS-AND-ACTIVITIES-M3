import { MdClose } from "react-icons/md";
import { StyledCartModalBox } from "./style";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { ICartModalProps } from "../../interfaces/iCartModalProps";
import { useContext } from "react";
import { CartContext } from "../../providers/cartContext";
import CartProductList from "./CartProductList";

function CartModal({ modal }: ICartModalProps) {
  const { cart } = useContext(CartContext);

  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag="h2" $fontSize="three">
            Carrinho de compras
          </StyledTitle>
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => {
              modal(false);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className="cartBox">
          {cart.length > 0 ? (
            <CartProductList />
          ) : (
            <div className="emptyBox">
              <StyledTitle tag="h3" $fontSize="three" textAlign="center">
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign="center">
                Adicione itens
              </StyledParagraph>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
}

export default CartModal;