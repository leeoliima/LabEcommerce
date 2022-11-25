import React from "react";

import {
  CardContainer,
  ButtonCart,
  CardName,
  CardPrice,
  CardImage,
} from "./Styled";

function Card({ addToCart, name, price, image }) {
  return (
    <>
      <CardContainer>
        <CardImage>
          <p>{image}</p>
        </CardImage>

        <CardName>
          <p>{name}</p>
        </CardName>

        <CardPrice>₿ {price}</CardPrice>

        <ButtonCart onClick={() => addToCart(name, price)}>
          Adicionar ao Carrinho
        </ButtonCart>
      </CardContainer>
    </>
  );
}

export default Card;
