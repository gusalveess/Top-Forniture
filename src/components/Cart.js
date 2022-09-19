import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';
import UserContext from "../Context/UserContext";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cart, total, setTotal, name, setName, cpf, setCpf, products, setCode } =
    useContext(UserContext);
  let sum = 0;
  const Navigate = useNavigate()

  function ListCart(props) {
    return (
      <>
        <ClientProduct>
          <p>{props.Produto}</p>
          <h2>{props.Valor}R$</h2>
        </ClientProduct>
        <Division></Division>
      </>
    );
  }

  useEffect(handleTotal);

  function handleTotal() {
    const positive = cart.filter((e) => e.group === "Movel");
    let totalPositive = 0;
    for (let i = 0; i < positive.length; i++) {
      totalPositive += parseFloat(positive[i].Valor);
    }
    sum = totalPositive.toFixed(2);
    setTotal(sum.replace(".", ","));
  }

  function HandleSubmit(e) {
    e.preventDefault()
    const filter = cart.filter((i) => i.group === "Movel");
    const codigo = uuid()
    for (let i = 0; i < filter.length; i++) {
      const produtos = {
        Produtos: filter[i].Produto,
      };
      products.push(produtos);
      console.log(products);
    }

    const body = {
      name: name,
      cpf: cpf,
      product: products,
      value: total,
    };

     const URL = "https://topfurniture.herokuapp.com/cart";
    const promise = axios.post(URL, body);
    promise.then(() => {
      alert("Compra realizada");
    });
    setCode(codigo)
    Navigate('/success')
  }

  return (
    <>
      <Body>
        <Header />

        <CheckOut>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <>
                <ListCart
                  key={index}
                  Produto={item.Produto}
                  Valor={item.Valor}
                />
                <Total>
                  <p>Total: {total}</p>
                  <h1>
                    Forma de pagamento: Boleto
                    <img src="https://img.icons8.com/color/480/boleto-bankario.png" />
                  </h1>
                </Total>
              </>
            ))
          ) : (
            <h3>Adicione Produtos ao Carrinho</h3>
          )}
        </CheckOut>

        <Form>
          <form onSubmit={HandleSubmit}>
            <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              type="Number"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />

            <Footer>
              <button>Concluir Compra</button>
            </Footer>
          </form>
        </Form>
      </Body>
    </>
  );
}

const Body = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const CheckOut = styled.div`
  width: 350px;
  margin-top: 70px;
  margin-left: 13px;
  background-color: #fff;
  height: 350px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.05);

  h3 {
    padding-top: 160px;
    padding-left: 50px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 4px 4px 4px 5px rgba(0, 0, 0, 0.15);

  button {
    height: 50px;
    width: 200px;
    border-radius: 20px;
    background-color: #e1bb69;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #fff;
    cursor: pointer;
  }
`;

const ClientProduct = styled.div`
  height: 27px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  p {
    color: black;
    padding-top: 10px;
    padding-left: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }

  h2 {
    color: black;
    padding-top: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
  }
`;

const Division = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 1px;
`;

const Form = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  input {
    height: 58px;
    width: 320px;
    margin-bottom: 13px;
    margin-top: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #f7f7f7;
    font-size: 20px;
    padding-left: 15px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;

const Total = styled.div`
  position: absolute;
  top: 380px;
  left: 25px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 600;

  img {
    height: 20px;
    width: 20px;
    padding-left: 10px;
    position: absolute;
    top: 13px;
  }
`;
