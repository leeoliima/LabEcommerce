import styled from "styled-components";

export const CartContainer = styled.div`
  width: auto;
  height: auto;
  align-items: center;
  font-size: 0.8rem;
  padding: 10px;
  margin: 3.5rem;
  box-shadow: 2px 2px 5px 2px Lightgray;

  border-radius: 15px;
  background-color: white;
  justify-content: center;

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  h2 {
    text-align: center;
    font-size: 1.1rem;
  }
`;

export const ProductOnCart = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  padding: 10px;
  box-shadow: 2px 2px 5px 2px lightgray;
  margin: 15px;
  border-radius: 15px;
  > button {
    padding: 1px;
    border-radius: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const ButtonRemove = styled.div`
  width: auto;
  height: auto;
  align-items: center;
  font-size: 0.8rem;
  padding: 5px;
  color: white;
  box-shadow: 2px 2px 5px 2px Lightgray;
  border-radius: 15px;
  background: linear-gradient(90deg, #002e61, #b527cf);
  justify-content: center;
  cursor: pointer;
  :hover {
    color: white;
    background: linear-gradient(90deg, #ff6464, red, #ff6464);
  }
  p {
    text-align: center;
    font-size: 0.8rem;
  }

  h2 {
    text-align: center;
    font-size: 1.1rem;
  }
`;
