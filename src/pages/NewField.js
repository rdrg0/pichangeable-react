import styled from "@emotion/styled";
import { ButtonGreen } from "component/UI/Buttons";
import { DollarIcon, LupitaIcon, CapacityIcon } from "component/UI/Icons";
import Input from "component/UI/Input";
import React from "react";
import { useHistory } from "react-router-dom";
import { AxiosCreateField, AxiosIndexField, AxiosShowField } from "services/AxiosField";

const Container = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    gap: 8px;
    background-color: white;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #68d391;
    input {
      width: 100%;
      border: none;
      outline: none;
      font-family: Inter;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.5px;

      :placeholder {
        color: #8e8e8e;
      }
    }
  `;
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

function NewField() {
  const history= useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.elements)
    let forminfo = new FormData();
    let images = e.target.elements.images_data.files[0];
    let name = e.target.elements.name.value;
    let address = e.target.elements.address.value;
    let capacity = e.target.elements.capacity.value;
    let summary = e.target.elements.summary.value;
    let price_hour=e.target.elements.price_hour.value;
      let sport_type="soccer"
      let field_type=e.target.elements.field_type.value;                                                                                     
      let ubication_id = "3"
      forminfo.append("name", name);
      forminfo.append("sport_type", sport_type);
      forminfo.append("address", address);
      forminfo.append("capacity", capacity);
      forminfo.append("price_hour", price_hour);
      forminfo.append("field_type", field_type);
      forminfo.append("summary", summary);
      forminfo.append("ubication_id", ubication_id);
      forminfo.append("published_at", "12-12-2021");
      forminfo.append("images", images);
    console.log(forminfo);
    
  await AxiosCreateField(forminfo).then(data => console.log(data));
  await AxiosIndexField();
  let dataAllFields=[];
    const dataFields = JSON.parse(await sessionStorage.getItem("fieldsData"));
      dataFields.forEach(async(field) => {
        const data = await AxiosShowField(field.id);
        dataAllFields.push(await data);
        sessionStorage.setItem("fieldsAllData", await JSON.stringify(dataAllFields));
      });
  history.push("/home");
                                                                  }
         
  return (
        <>
          <Form onSubmit={handleSubmit}>
          <Title>Registrar una nueva cancha</Title>
         <label>Name</label>
          <Container>
         <input type="text"
         placeholder="Enter the name of your field"
           id="name"
         name="name"
           /> 
           </Container>
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
              <option>soccer</option>
              <option>tennis</option>
            </Select>
          </FlexColumn>
          <FlexColumn>
              <Input
              type="string"
              placeholder="100"
              id="field_type"
              name="field_type"
              label="Field type"
              Icon={DollarIcon}
              width="60%"
            />
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
        name="images_data"
        accept="image/*"/>
        <p>Only images, max 5mb</p>
        <ButtonGreen>Publica tu cancha</ButtonGreen>
      </Form>
    </>
  );
}

export default NewField;
