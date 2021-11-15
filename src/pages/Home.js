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
import { useHistory } from "react-router-dom";
import cancha1 from "../component/UI/cancha7.jpg";
import cancha2 from "../component/UI/cancha8.jpg";
import cancha3 from "../component/UI/cancha11.jpg";
import { ubications } from "Constants";

export default function Home() {
  const [fields, setFields] = React.useState(JSON.parse(sessionStorage.getItem("fieldsAllData")));
  const history = useHistory();

  const bestFields = [ 
    {id: 1000, ubication_id: 5, name: 'All Sport',sport_type:'soccer', field_type: 'sintetic', capacity: 9,
    summary:'Unfortunately this sport and recreation facility currently does offer instant online booking via  To speak with a member of staff at Whitechapel Sports Centre about the rental of their facilities, you will need to reach out directly via the contact details we have listed for Whitechapel Sports Centre, 55 Durward Street, London, E1 5BA.', price_hour: 35 ,
    address: 'Jr Amabilidad 367', images: cancha1},
    {id: 1001, ubication_id: 6, name: 'Tu canchita',sport_type:'soccer', field_type: 'grass', capacity: 20,
    summary:'Unfortunately this sport and recreation facility currently does offer instant online booking via  To speak with a member of staff at Whitechapel Sports Centre about the rental of their facilities, you will need to reach out directly via the contact details we have listed for Whitechapel Sports Centre, 55 Durward Street, London, E1 5BA.', price_hour: 50 ,
    address: 'Jr Honestidad 4521', images: cancha2},
    {id: 1002, ubication_id: 3, name: 'Tu pelotita',sport_type:'soccer', field_type: 'sintetic', capacity: 10,
    summary:'Unfortunately this sport and recreation facility currently does offer instant online booking via  To speak with a member of staff at Whitechapel Sports Centre about the rental of their facilities, you will need to reach out directly via the contact details we have listed for Whitechapel Sports Centre, 55 Durward Street, London, E1 5BA.', price_hour: 30 ,
    address: 'Av Indescente 999', images: cancha3},
  ];

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
            image={field.images}
            price_hour={field.price_hour}
            name={field.name}
            address={field.address}
            field_type={field.field_type}
            sport_type={field.sport_type}
            location={Object.keys(ubications).find(key => ubications[key] === field.ubication_id)}
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
        {fields && fields.map(field => (
          <ListItem 
          id={field.id}
          image={field.images[0].image_url}
          price_hour={field.price_hour}
          name={field.name}
          address={field.address}
          field_type={field.field_type}
          sport_type={field.sport_type}
          location={Object.keys(ubications).find(key => ubications[key] === field.ubication_id)}
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
  padding-top: 3%;
`;
