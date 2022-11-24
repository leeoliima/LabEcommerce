import React from "react";
import { CardContainer, ButtonCart, CardName, CardPrice, CardImage} from "./Styled";

function Card (props) {
  
    return <CardContainer> 
        <CardImage>
            {props.produto.image}
        </CardImage>       

        <CardName>
            {props.produto.name}
        </CardName>
 
         <CardPrice>
         ₿ {props.produto.price}
         </CardPrice> 

         <ButtonCart>Adicionar ao carrinho</ButtonCart>
    </CardContainer>
      
}

export default Card;