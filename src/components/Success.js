import Header from "./Header";
import styled from "styled-components";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const { total, name, cpf, products, code } = useContext(UserContext);
  const Navigate = useNavigate()

  function List(props) {
    return (
      <>
        <p>{props.Produtos}</p>
      </>
    );
  }

  return (
    <>
      <Body>
        <Header />

        <Concluded>
          <p>
            Pedido Concluído! Retire o produto na loja mais próxima com o código
            abaixo.
          </p>
        </Concluded>

        <Details>
          <div>
            <h1>Comprador:</h1>
            <p>Nome: {name}</p>
            <p>CPF: {cpf}</p>
          </div>

          <div>
            <h1>Pedidos:</h1>
            {products.map((item, index) => (
              <>
              <List key={index} Produtos={item.Produtos}/>
              </>
            ))}
          </div>

          <div>
            <h1>Total: ${total}</h1>
          </div>

          <div>
            <h1>Código de retirada:</h1>
            <p>{code}</p>
          </div>

          <button onClick={() => Navigate('/')}>Voltar para Home</button>
        </Details>
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

const Concluded = styled.div`
  padding-top: 100px;
  padding-left: 20px;

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #247a6b;
    font-size: 17px;
  }
`;
const Details = styled.div`
  margin-top: 50px;

  div {
    margin-bottom: 30px;
  }

  h1 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 18px;
    padding-left: 10px;
  }

  p {
    padding-top: 10px;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 15px;
    padding-left: 10px;
  }

  button {
    height: 70px;
    width: 250px;
    margin-left: 65px;
    margin-top: 70px;
    border-radius: 10px;
    background-color: #e1bb69;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 19px;
    color: #fff;
    cursor: pointer;
  }
`;
