import styled from "@emotion/styled";
import React from "react";
import {
  FontMediumGray,
  FontSizeBig,
  FontSizeMedium,
} from "../component/UI/Typography";
import public_cancha from "../component/UI/busca_una_cancha.jpg";
import buscador_cancha from "../component/UI/4619100.jpg";
import { useHistory } from "react-router";

const Sign = styled.div`
  display: flex;
  height: 704px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    white 50%,
    var(--light-green) 50%,
    var(--green) 50%
  );
  flex-direction: column;
  padding-top: 64px;
  gap: 44px;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Options = styled.div`
  display: flex;
  background: transparent;
  flex-direction: row;
  gap: 100px;
  align-self: center;
  margin: 0 auto;
`;
const Card = styled.div`
  border: 1px solid var(--dark-green);
  width: 254px;
  height: 320px;
  padding: 16px;
  background-color: white;
  border-radius: 24px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 10px;
  img {
    height: 65%;
    width: 100%;
    border-radius: 24px;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export default function SignFlow() {
  const history= useHistory();
  function goSignupAdmin(){
    sessionStorage.setItem("role","1");
    history.push("/signup");
  }
  function goSignupUser(){
    sessionStorage.setItem("role","0");
    history.push("/signup");
  }
  return (
    <>
      <Sign>
        <Titles>
          <FontMediumGray style={{ fontSize: 24, textAlign:"center" }}>
            Selecciona el perfil con el que te identificas
          </FontMediumGray>
          <FontSizeBig style={{ fontSize: 44, textAlign:"center" }}>
            ¿Qué estás buscando?
          </FontSizeBig>
        </Titles>
        <Options>
            <Card onClick={goSignupAdmin}>
              <img src={public_cancha} alt="publicador_cancha" />
              <FontSizeMedium style={{ fontWeight: 600 }}>Administrador</FontSizeMedium>
              <FontMediumGray>
                Tienes algún espacio deportivo que ofrecer
              </FontMediumGray>
            </Card>
          <Card  onClick={goSignupUser}>
            <img src={buscador_cancha} alt="buscador_cancha" />
            <FontSizeMedium style={{ fontWeight: 600 }}>Pichanguero</FontSizeMedium>
            <FontMediumGray style={{ textAlign:"center" }}>Necesitas un campo deportivo</FontMediumGray>
          </Card>
        </Options>
      </Sign>
    </>
  );
}
