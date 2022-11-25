import React, { useState } from "react";
import Header from "../header/Index";
import Card from "../products/Index";
import Apps from "./Styled";
import Filters from "../filter/Index";
import productsList from "../../data/MockDeDados";
import { Cart } from "../cart/Index";

function App({ handleClick }) {
  const [products] = useState(productsList);
  const [productsOnCart, setProductsOnCart] = useState([]);
  const [query, setQuery] = useState("");
  const [minPrice, setMinPrice] = useState(-Infinity);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [sortingParameter, setSortingParameter] = useState("name");
  const [order, setOrder] = useState("asc");
  const [totalValue, setTotalValue] = useState(0);

  function addToCart(name, price) {
    const checkForProductOnCart = productsOnCart.filter((product) => {
      if (product.name === name) {
        return product;
      } else {
        return false;
      }
    });

    let newCart = [...productsOnCart];

    if (checkForProductOnCart.length === 0) {
      newCart = [...newCart, { name: name, price: price, quantity: 1 }];
      localStorage.setItem("carrinho", JSON.stringify(newCart));
      setProductsOnCart(newCart);
    } else {
      const newC = productsOnCart.map((product) => {
        if (product.name === name) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });

      setProductsOnCart(newC);
      localStorage.setItem("carrinho", JSON.stringify(newC));
    }

    addTotalValue(price);
  }

  function addTotalValue(price) {
    setTotalValue(totalValue + price);
    localStorage.setItem("valorCompra", JSON.stringify(totalValue + price));
  }

  function removeTotalValue(price) {
    setTotalValue(totalValue - price);
    localStorage.setItem("valorCompra", JSON.stringify(totalValue - price));
  }

  const removeProductFromCart = (product) => {
    if (product.quantity === 1) {
      const newCart = productsOnCart.filter((item) => {
        if (item.name !== product.name) {
          return product;
        } else {
          return false;
        }
      });
      setProductsOnCart(newCart);
      localStorage.setItem("carrinho", JSON.stringify(newCart));
    } else {
      const newCart = productsOnCart.map((item) => {
        if (product.name === item.name && item.quantity >= 1) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setProductsOnCart(newCart);
      localStorage.setItem("carrinho", JSON.stringify(newCart));
    }

    removeTotalValue(product.price);
  };

  return (
    <>
      <Header />

      <Filters
        query={query}
        minPrice={minPrice}
        maxPrice={maxPrice}
        sortingParameter={sortingParameter}
        order={order}
        setQuery={setQuery}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSortingParameter={setSortingParameter}
        setOrder={setOrder}
      />

      <Apps>
        {products
          .filter((produto) => {
            return produto.name
              .toLocaleLowerCase()
              .includes(query.toLocaleLowerCase());
          })
          .filter((produto) => {
            return produto.price >= minPrice || minPrice === "";
          })
          .filter((produto) => {
            return produto.price <= maxPrice || maxPrice === "";
          })
          .sort((currentProduto, nextProduto) => {
            switch (sortingParameter) {
              case "price":
                return currentProduto.price - nextProduto.price;
              default:
                return currentProduto.name.localeCompare(nextProduto.name);
            }
          })
          .sort(() => {
            if (order === "asc") {
              return 0;
            } else {
              return -1;
            }
          })
          .map((product) => {
            return (
              <Card
                key={product.id}
                produto={product}
                handleClick={handleClick}
                name={product.name}
                price={product.price}
                image={product.image}
                addToCart={addToCart}
              />
            );
          })}
      </Apps>
      <div>
        <Cart
          productsOnCart={productsOnCart}
          totalValue={totalValue}
          removeProductFromCart={removeProductFromCart}
        />
      </div>
    </>
  );
}
export default App;
