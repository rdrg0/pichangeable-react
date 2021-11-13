import styled from "@emotion/styled";
import React from "react";
import Header from "../component/Header";
import { Footer } from "../component/Footer";
import { TeamProfiles } from "../component/TeamProfiles";
import { FontSizeBig } from "../component/UI/Typography";
import { ButtonWhite } from "../component/UI/Buttons";
import ListItem from "../component/Card";
import { NavLink } from "react-router-dom";
import { Hero } from "../component/Hero";
import { AxiosIndexField } from "services/AxiosField";

export default function Home() {
  const [fields, setFields] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await AxiosIndexField();
      setFields(result);
    }
    fetchData();
  });



  

  return (
    <>
    <Container>
      <Header />
      <Hero/>
      <BestFieldsContainer>
        <FontSizeBig style={{ color: "var(--light-green)" }}>
          ¡NUESTRAS CANCHAS MAS SOLICITADAS!
        </FontSizeBig>
        <LisContainer>
          <ListItem />
          <ListItem />
          <ListItem />
        </LisContainer>
      </BestFieldsContainer>
      <Slogan>
        <FontSizeBig style={{ color: "var(--white)" }}>
          ¡Registrate y encuentra las mejores promociones para tu pichanga!
        </FontSizeBig>
        <NavLink to="/signup" className='navlink'>
          <ButtonWhite style={{ marginTop: "5%" }} >
            Quiero una cuenta ahora
          </ButtonWhite>
        </NavLink>
      </Slogan>
      <TeamProfiles />
      <Footer />
    </Container>
    </>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 0% 5% 0%;
  margin-bottom: 0%;
  width: 100%;
  background-color: var(--green);

  .navlink {
    text-decoration: none;
  }
`;

const BestFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 0% 5% 0%;
  margin-bottom: 0%;
  width: 100%;
`;

const LisContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 5% 0% 5% 0%;
  margin-bottom: 0%;
  width: 75%;
`;
