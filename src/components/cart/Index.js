import React, { useEffect } from "react";
import { ButtonRemove, CartContainer, ProductOnCart } from "./Styled";

export function Cart({ removeProductFromCart }) {
  useEffect(() => {
    renderProductsOnCart();
    getTotalValue();
  });

  function getTotalValue() {
    const totalValueOnLocalStorage = Number(
      localStorage.getItem("valorCompra")
    );
    return totalValueOnLocalStorage;
  }

  function renderProductsOnCart() {
    const productOnLocalStorage = JSON.parse(localStorage.getItem("carrinho"));

    const productsOnCartList =
      productOnLocalStorage &&
      productOnLocalStorage.map((product) => {
        return (
          <ProductOnCart key={product.name}>
            <p>{product.quantity} - </p>
            <p> {product.name}</p>
            <p>  ₿ {product.price}</p>
            <ButtonRemove onClick={() => removeProductFromCart(product)}>
              Retirar do carrinho
            </ButtonRemove>
          </ProductOnCart>
        );
      });

    return productsOnCartList;
  }

  return (
    <CartContainer>
      <h2>Carrinho:</h2>
      {renderProductsOnCart()}
      <h2>
        <b>Valor total: ₿ {getTotalValue()}</b>
      </h2>
    </CartContainer>
  );
}
