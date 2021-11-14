import styled from "@emotion/styled";
import cancha from "./UI/cancha8.jpg";
import Map from "./Map";
import { FontMediumGray, FontSizeBig, TitleGraySmaller } from "./UI/Typography";
import { ButtonGreen, ButtonWhite } from "./UI/Buttons";
import { SportIcon, PersonIcon, FieldIcon } from "./UI/Icons";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: "50%",
    height: "70%",
    backgroundColor: "transparent",
    borderRadius: "8px",
    border: "transparent",
    marginTop: "4%",
    margin: "0 auto",
    padding: "25px",
  },
}));
const DetailContainer = styled.div`
  display: flex;
  background: white;
  flex-direction: row;
  padding-top: 10px;
  gap: 60px;
  padding: 20px;
  margin: 8px;
  position: relative;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 50%;
  margin: 0;
  padding: 20px;
  margin-left: 10px;
  img {
    width: 80%;
    height: 65%;
    margin: 0 auto;
    border-radius: 16px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    margin-top: 8px;
  }
  button {
    align-self: center;
  }
`;

const ContainerImportant = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContainerVertical = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0px 25px;
  gap: 10px;
`;

const DivBorder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 3px solid var(--dark-green);
  padding-bottom: 15px;
  border-bottom: 3px solid var(--dark-green);
  margin: 0px 25px;
  div {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }
`;

export default function DetailField() {
  const styles = useStyles();
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  const body = (
    <div
      className={styles.modal}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <FontMediumGray style={{ fontWeight: 1000, fontSize: 26 }}>
        Reserva ahora
      </FontMediumGray>
      <FontMediumGray>
        Recuerda que no se aceptan cambios ni devoluciones.
      </FontMediumGray>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          gap: 30,
          paddingBottom: 0,
        }}
      >
        <ButtonWhite>Cancel</ButtonWhite>
        <ButtonGreen>Reservar</ButtonGreen>
      </div>
      <button
        style={{
          border: "transparent",
          backgroundColor: "transparent",
          textAlign: "right",
          fontFamily: "Inter",
          fontSize: 18,
          letterSpacing: 1.25,
          paddingRight: 45,
          color: "var(--dark-gray)",
          textTransform: "uppercase",
        }}
        onClick={openModal}
      >
        Cancel
      </button>
    </div>
  );

  return (
    <>
      <DetailContainer>
        <Details style={{ borderRight: "3px solid var(--light-gray)" }}>
          <ContainerVertical>
            <ContainerImportant>
              <TitleGraySmaller>Tu Pelotita</TitleGraySmaller>
              <TitleGraySmaller>$15</TitleGraySmaller>
            </ContainerImportant>
            <ContainerImportant>
              <FontMediumGray>Jr. Ceramicas 234</FontMediumGray>
              <FontMediumGray>El Agustino</FontMediumGray>
            </ContainerImportant>
          </ContainerVertical>
          <DivBorder>
            <div>
              <SportIcon />
              <TitleGraySmaller>Soccer</TitleGraySmaller>
            </div>
            <div>
              <FieldIcon />
              <TitleGraySmaller>Grass</TitleGraySmaller>
            </div>
            <div>
              <PersonIcon />
              <TitleGraySmaller>11-11</TitleGraySmaller>
            </div>
          </DivBorder>
          <img src={cancha} alt="image_de_cancha" />
          <ContainerVertical>
            <FontSizeBig style={{ color: "var(--dark-green)" }}>
              Acerca de la cancha...
            </FontSizeBig>
            <FontMediumGray>
              Unfortunately this sport and recreation facility currently does
              offer instant online booking via pitchbooking.com To speak with a
              member of staff at Whitechapel Sports Centre about the rental of
              their facilities, you will need to reach out directly via the
              contact details we have listed for Whitechapel Sports Centre, 55
              Durward Street, London, E1 5BA.
            </FontMediumGray>
          </ContainerVertical>
        </Details>

        <Details>
          <FontSizeBig style={{ color: "var(--dark-green)" }}>
            Location
          </FontSizeBig>
          <Map x={Math.random() * -1.012} y={Math.random() * -1.12} />
          <FontSizeBig style={{ color: "var(--dark-green)" }}>
            Make a Booking
          </FontSizeBig>
          <FontMediumGray>
            To reserve this venue, click the button below to reach out directly.
          </FontMediumGray>
          <ButtonGreen onClick={openModal}>Book Facility</ButtonGreen>
          <Modal className={styles.modal} open={modal} onClose={openModal}>
            {body}
          </Modal>
        </Details>
      </DetailContainer>
    </>
  );
}
