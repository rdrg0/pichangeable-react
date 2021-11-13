import styled from "@emotion/styled";
import { DollarIcon, LupitaIcon } from "component/UI/Icons";
import Input from "component/UI/Input";
import React from "react";

const Title = styled.h2`
  margin: 32px 0px;
  font-family: Montserrat;
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
`;
const SubTitle = styled.h3`
  margin: 12px 0px 8px 0px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.15px;
  color: #373737;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-left: 5vw;
  label {
    font-family: Inter;
    font-size: 10px;
    line-height: 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #616161;
    margin: 4px 0px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #8e8e8e;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    width: 274px;
    height: 56px;
    background: #68d391;
    border-radius: 16px;
    margin: 16px 0px;
    border-style: none;

    font-family: Inter;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;
const Select = styled.select`
  background: #ffffff;
  border: 1px solid #68d391;
  margin-bottom: 16px;
  outline: none;
  box-sizing: border-box;
  border-radius: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  height: 36px;
  width: 120px;
  padding: 4px;
  color: #616161;
`;
const TextArea = styled.textarea`
  background-color: white;
  border-radius: 8px;
  padding: 8px;
  margin-bottom: 4px;
  border: 1px solid #68d391;
  outline: none;
  resize: none;
  font-family: Inter;
  font-size: 14px;
  line-height: 20px;
`;
const FlexRow = styled.div`
  display: flex;
  gap: 16px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
const PhotoContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  height: 136px;
  background: #f5f5f6;
`;
const PhotoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  left: 8px;
  top: 8px;
  background: #e1e2e1;
  border-radius: 8px;
`;

function NewField() {
  return (
    <>
      <Form>
        <Title>Registrar una nueva cancha</Title>
        <Input
          type="text"
          placeholder="Start typing to autocomplete"
          id="direccion"
          name="direccion"
          label="Direccion"
          Icon={LupitaIcon}
          width="100%"
        />
        <FlexRow>
          <FlexColumn>
            <label htmlFor="sport">Tipo de deporte</label>
            <Select id="sport">
              <option value="">Select...</option>
            </Select>
          </FlexColumn>
          <FlexColumn>
            <label htmlFor="fieldType">Tipo de cancha</label>
            <Select id="fieldType">
              <option value="">Select...</option>
            </Select>
          </FlexColumn>
        </FlexRow>
        <Input
          type="text"
          placeholder="100"
          id="hourlyCost"
          name="hourlyCost"
          label="Costo por hora"
          Icon={DollarIcon}
          width="60%"
        />
        <label htmlFor="comentarioAdicional">Comentario adicional</label>
        <TextArea placeholder="Mi cancha es genial porque..." />
        <p>
          Añade alguna descripcion que facilite la informacion al usuario final
        </p>

        <SubTitle>Fotografia</SubTitle>
        <label htmlFor="pictures">Añade hasta 3 imagenes</label>
        <input type="file" />
        <p>Only images, max 5mb</p>
        <PhotoContainer>
          <PhotoCard>
            <p>No photos yet</p>
          </PhotoCard>
        </PhotoContainer>

        <button>Publica tu cancha</button>
      </Form>
    </>
  );
}

export default NewField;
