import styled from "styled-components";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import UserContext from "../Context/UserContext";

export default function ListProducts() {
  const { data, setData, cart } =
    useContext(UserContext);

  useEffect(() => {
    const promisse = axios.get(
      `https://topfurniture.herokuapp.com/home`
    );
    promisse.then((res) => {
      setData(res.data);
    });
    promisse.catch((err) => console.log(err.response.status));
  }, []);

  function List(props) {
    function Add() {

      const confirm = window.confirm('Deseja adicionar o Produto ao carrinho?')

      if(confirm) {
        const Product =
        {
          "Produto": `${props.description}`,
          "Valor": `${props.value}`,
          "group": `${props.group}`
        }
      ;
      cart.push(Product);
      } else {
        setTimeout(() => {
          window.location.reload(true)
        }, 500);
      }
    }

    return (
      <>
        <Card>
          <img src={props.image} />
          <p>{props.description}</p>
          <div>
            <h4>{props.value}R$</h4>
            <ion-icon
              onClick={() => Add()}
              name="add-circle-outline"
            ><span>Clique duas vezes para adicionar produto ao carrinho</span></ion-icon>
          </div>
        </Card>
      </>
    );
  }

  return (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <List
            key={index}
            image={item.image}
            description={item.description}
            value={item.value}
            group={item.group}
          />
        ))
      ) : (
        <h3>Atualize a Página</h3>
      )}
    </>
  );
}

const Card = styled.div`
  height: 220px;
  width: 150px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 17px;
    padding-top: 15px;
    padding-left: 10px;
    color: #808080;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  h4 {
    padding-left: 10px;
    padding-top: 15px;
    font-size: 17px;
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ion-icon {
    font-size: 22px;
    padding-top: 13px;
    cursor: pointer;
  }
`;
