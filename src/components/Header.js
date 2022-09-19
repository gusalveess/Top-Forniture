import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Header() {

    const Navigate = useNavigate()
  return (
    <>
      <Top>
        <div>
          <h1>Top <br/>Forniture</h1>
          <img src="https://cdn-icons-png.flaticon.com/512/2361/2361657.png" />
        </div>
        <div>
          <ion-icon onClick={() => Navigate('/')} name="home-outline"></ion-icon>
          <ion-icon  onClick={() => Navigate('/cart')} name="cart-outline"></ion-icon>
          <ion-icon  onClick={() => Navigate('sign-up')}name="person-circle-outline"></ion-icon>
        </div>
      </Top>
    </>
  );
}

const Top = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  z-index: 2;
  background-color: #f7f7f7;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);

  h1 {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #e1bb69;
  }

  div {
    width: 130px;
    display: flex;
    justify-content: space-around;
  }

  ion-icon {
    font-size: 28px;
  }

  ion-icon:hover {
    cursor: pointer;
    color: #e1bb69;
  }

  img {
    width: 32px;
    height: 34px;
    position: relative;
    top: -3px;
    right: 50px;
  }
`;
