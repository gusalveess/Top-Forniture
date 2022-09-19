import styled from "styled-components";
import Header from "./Header";
import ListProducts from "./ListProducts";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";

export default function Menu() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Body>
        <Header />

        <Topic>
          <h2>Olá, Escolha já o melhor móvel para sua casa!</h2>
        </Topic>

        <Products>
          <h6>Produtos</h6>

          <Box>
            <ListProducts />
          </Box>
        </Products>
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

const Topic = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 100px;

  h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 18px;
    padding-left: 10px;
    color: #ba8a23;
  }
`;

const Products = styled.div`
  margin-top: 10px;

  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding-top: 35px;
    padding-left: 26px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;

  h3 {
    padding-top: 50px;
    padding-left: 15px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;
