import styled from "@emotion/styled";
import { DollarIcon, LupitaIcon, CapacityIcon } from "component/UI/Icons";
import Input from "component/UI/Input";
import React from "react";
import { useHistory } from "react-router-dom";
import { AxiosCreateField } from "services/AxiosField";

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

function NewField() {
  const history= useHistory();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    let forminfo = new FormData();
    let images = URL.createObjectURL(e.target.elements.images.files[0])
    let name = e.target.elements.name.value;
    let address = e.target.elements.address.value;
    let capacity = e.target.elements.capacity.value;
    let summary = e.target.elements.summary.value;
    let price_hour=e.target.elements.price_hour.value;
    let sport_type=e.target.elements.sport_type.value;
    let field_type=e.target.elements.field_type.value;
    let user_id=sessionStorage.getItem("id");
    let ubication_id = "4"
    forminfo.append("name", name);
    forminfo.append("address", address);
    forminfo.append("capacity", capacity);
    forminfo.append("address", address);
    forminfo.append("summary", summary);
    forminfo.append("price_hour", price_hour);
    forminfo.append("sport_type",sport_type);
    forminfo.append("field_type", field_type)
    forminfo.append("images", images)
    forminfo.append("user_id", user_id)
    console.log({name,address,capacity,sport_type,field_type,summary,price_hour,images,user_id,ubication_id});
    console.log(forminfo.toString());
    AxiosCreateField(forminfo).then(data => console.log(data));
    history.push("/home");
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Title>Registrar una nueva cancha</Title>
        <Input
          type="text"
          placeholder="Enter the name of your field"
          id="name"
          name="name"
          label="name"
          Icon={LupitaIcon}
          width="100%"
        />
        <Input
          type="text"
          placeholder="Start typing to autocomplete"
          id="address"
          name="address"
          label="Address"
          Icon={LupitaIcon}
          width="100%"
        />
        <FlexRow>
          <FlexColumn>
            <label htmlFor="sport">Tipo de deporte</label>
            <Select id="sport" name="sport_type">
              <option value="">Select...</option>
              <option>Soccer</option>
              <option>Tennis</option>
            </Select>
          </FlexColumn>
          <FlexColumn>
            <label htmlFor="fieldType">Tipo de cancha</label>
            <Select id="fieldType" name="field_type">
              <option value="">Select...</option>
              <option>Arcilla</option>
              <option>Sintetic</option>
              <option>Grass</option>
            </Select>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
        <Input
          type="text"
          placeholder="100"
          id="price_hour"
          name="price_hour"
          label="Costo por hora"
          Icon={DollarIcon}
          width="60%"
        />
        <Input
          type="number"
          placeholder="8"
          id="capacity"
          name="capacity"
          label="People Capacity"
          Icon={CapacityIcon}
          width="30%"
        />
        </FlexRow>
        <label htmlFor="comentarioAdicional">Comentario adicional</label>
        <TextArea placeholder="Mi cancha es genial porque..." id="summary" name="summary"/>
        <p>
          Añade alguna descripcion que facilite la informacion al usuario final
        </p>

        <SubTitle>Fotografia</SubTitle>
        <label htmlFor="pictures">Añade hasta 3 imagenes</label>
        <input 
        id="file"
        type="file"
        name="images"
        accept="image/*" />
        <p>Only images, max 5mb</p>
        <button>Publica tu cancha</button>
      </Form>
    </>
  );
}

export default NewField;
