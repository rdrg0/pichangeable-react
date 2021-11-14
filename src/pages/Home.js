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
import cancha from "../component/UI/cancha8.jpg";

export default function Home() {
  const [fields, setFields] = React.useState([]);
  const [bestFields, setBestFields] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const result = await AxiosIndexField();
      setFields(result);
      setBestFields(result.slice(0, 3));
    }
    fetchData();
  }, []);
  console.log(fields);
  


  return (
    <>
      <Header />
      {!sessionStorage.getItem("token") ? 
      (
      <>
      <Hero/>
      <BestFieldsContainer>
        <FontSizeBig style={{ color: "var(--light-green)" }}>
          ¡NUESTRAS CANCHAS MAS SOLICITADAS!
        </FontSizeBig>
        <LisContainer>
        {bestFields.map((field) => (
          <ListItem
             id={field.id}
            image={cancha}
            price_hour={field.price_hour}
            name={field.name}
            address={field.address}
            field_type={field.field_type}
            sport_type={field.sport_type}
            location={field.ubication_id}
            summary={field.summary}
            capacity={field.capacity}
          />
        ))}
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
      </>
      ) : (
        <FieldsContainer >
        {fields.slice(0, 6).map(field => (
          <ListItem 
          id={field.id}
          image={cancha}
          price_hour={field.price_hour}
          name={field.name}
          address={field.address}
          field_type={field.field_type}
          sport_type={field.sport_type}
          location={field.ubication_id}
          summary={field.summary}
          capacity={field.capacity}
          />
        ))}
        </FieldsContainer>
      )}
      <Footer />
    </>
  );
}

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
  padding: 5%;
  margin-bottom: 0%;
  width: 100%;
`;

const LisContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 5%;
  padding: 5% 0% 5% 0%;
  margin-bottom: 0%;
  width: 75%;
`;

const FieldsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  background-color: var(--white);
  justify-content: center;
  justify-items: center;
  gap: 5%;
  padding: 0% 5% 0% 5%;
  align-items: center;
  width: 100%;
  padding-bottom:8%;
  padding-top: 3%
`;
