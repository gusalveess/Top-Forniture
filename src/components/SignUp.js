import { Link, useNavigate } from "react-router-dom";
import IMG from "../assets/2361657.png";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function Logar(e) {
    e.preventDefault();

    const URL = "https://topfurniture.herokuapp.com/sign-up";

    const body = {
      email,
      password,
    };

    const promise = axios.post(URL, body);
    promise.then((res) => {
      const { data } = res;
      localStorage.setItem("infoToken", JSON.stringify(data.token));
      navigate("/home");
      alert("Bem-vindo");
    });
    promise.catch((err) => {
      alert("Falha ao fazer o Login.");
    });
  }

  return (
    <Conteiner>
      <Center>
        <Top>
          <ion-icon
            onClick={() => navigate("/")}
            name="arrow-back-circle-outline"
          ></ion-icon>
        </Top>

        <Logo>
          <p>Top</p>
          <h1>Forniture</h1>
          <img src={IMG} alt="Logo do Top Furniture" />
        </Logo>
        <form onSubmit={Logar}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
        <Link to="/sign-in">
          <h2>Primeira vez? Cadastre-se!</h2>
        </Link>
        <Fixed>
          featured by Gabriela Teresa <br />
          and Gustavo Alves
        </Fixed>
      </Center>
    </Conteiner>
  );
}

const Conteiner = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  input {
    height: 58px;
    width: 300px;
    margin-bottom: 13px;
    margin-top: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    font-size: 20px;
    padding-left: 15px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
  }

  button {
    width: 320px;
    height: 58px;
    background-color: #e1bb69;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    border: none;
    border-radius: 5px;
    margin-top: 13px;
    color: #fff;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    color: #c49b44;
    font-weight: 600;
    font-family: "Raleway";
    font-size: 16px;
    padding-top: 30px;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }
`;
const Logo = styled.div`
  h1 {
    font-family: "Shadows Into Light", cursive;
    font-size: 50px;
    color: #e1bb69;
  }

  p {
    font-family: "Shadows Into Light", cursive;
    font-size: 50px;
    padding-left: 40px;
    color: #e1bb69;
    margin-top: 80px;
    margin-bottom: 5px;
  }

  img {
    width: 60px;
    height: 60px;
    padding-left: 45px;
  }
`;
const Fixed = styled.div`
  font-family: "Raleway";
  font-size: 10px;
  font-weight: 700;
  margin-top: 100px;
  color: #808080;
`;

const Top = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;

  ion-icon {
    font-size: 33px;
    padding-left: 10px;
    padding-top: 10px;
  }
`;
