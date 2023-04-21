import { StyledProductCard } from "./style";
import { StyledButton } from "../../../styles/button";
import { StyledParagraph, StyledTitle } from "../../../styles/typography";
import { IProductCardProps } from "../../../interfaces/iProductCardProps";
import { useContext } from "react";
import { CartContext } from "../../../providers/cartContext";

function ProductCard({ product }: IProductCardProps) {
  const { addToCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className="imageBox">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {product.name}
        </StyledTitle>
        <StyledParagraph className="category">
          {product.category}
        </StyledParagraph>
        <StyledParagraph className="price">{`R$ ${product.price.toFixed(
          2
        )}`}</StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addToCart(product)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
}

export default ProductCard;
