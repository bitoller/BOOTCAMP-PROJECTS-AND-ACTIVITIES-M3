import AliceCarousel from "react-alice-carousel";
import { StyledCarousel } from "./style";
import "react-alice-carousel/lib/alice-carousel.css";

export function Carousel() {
  const handleDragStart = (e: any) => e.preventDefault();

  const items = [
    <div className="carousel-container orange-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Amor de verdade não se compra, se encontra!
      </p>
    </div>,
    <div className="carousel-container green-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Ter pena não adianta! Dê água e alimento aos animais de rua!
      </p>
    </div>,
    <div className="carousel-container blue-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Furever Homes: Onde amantes de animais encontram seus novos amigos!
      </p>
    </div>,
    <div className="carousel-container orange-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Adoção é coisa séria: "Prometo ser fiel, te amar e te respeitar... Na
        alegria e na tristeza, na saúde e na doença".
      </p>
    </div>,
    <div className="carousel-container green-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Faça seu papel: Tire um animal da rua e coloque-o para adoção aqui no
        nosso site!
      </p>
    </div>,
    <div className="carousel-container blue-container">
      <p
        className="carousel-paragraph"
        onDragStart={handleDragStart}
        role="presentation"
      >
        Feira de adoção: Encontre aqui seu novo melhor amigo!
      </p>
    </div>,
  ];

  return (
    <StyledCarousel>
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay={true}
        infinite={true}
        autoPlayInterval={5000}
        disableButtonsControls={true}
      />
    </StyledCarousel>
  );
}
