import styled from "@emotion/styled";
import React from "react";

const Title = styled.h2`
  margin: 32px 0px;
  
  font-family: Montserrat;
  font-size: 36px;  
  font-weight: 400;
  line-height: 48px;
  letter-spacing: 0.25px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-left: 5vw;
  label{   

    font-family: Inter;    
    font-size: 10px;
    line-height: 16px;    
    letter-spacing: 1.5px;
    text-transform: uppercase;    
    color: #616161;    
    margin: 4px 0px;
  }
`
function Input({ id, name, type, ...props }) {
  const Container = styled.div`
    display: flex;
    background-color: white;
    height: 40px;
    border-radius: 8px;
    padding: 8px;
    border: 1px solid #68D391;
    input {
      width: 100%;
      border: none;
      outline: none;
    }
    
  `
  return (
    <>
      <label htmlFor={id}>Direccion</label>
      <Container>
        <input id={id} name={name} type={type} />
      </Container>
    </>

  )
}
function NewField() {
  return (
    <>

      <Form>
        <Title>Registrars una nueva cancha</Title>
        <Input type='text' id='direccion' name='direccion'></Input>
      </Form>
    </>

  )
}

export default NewField;