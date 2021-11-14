import React, { useContext } from "react";
import styled from "@emotion/styled";
import { LabelForm } from "../component/UI/Typography";
import { ButtonGreen } from "../component/UI/Buttons";
import { AxiosCreateUser } from "services/AxiosUser";
import { SessionContext } from "context/SessionContext";
import { useHistory } from "react-router";

const PageSignUp = styled.div`
  display: flex;
  flex-direction: column;
  padding-top:4%;
  gap: 5%;
  height: 704px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    white 50%,
    var(--light-green) 50%,
    var(--green) 50%
  );
`;
const ContainerForm = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 380px;
  background: white;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0px;
  gap: 8px;
  border: 2px solid var(--dark-green);
  margin: 0 auto;
  align-self: center;
`;

const Title = styled.label`
  font-family: Montserrat;
  font-size: 24px;
  line-height: 32px;
  align-self: center;
`;

const FormData = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8px;
  button {
    margin-top: 4px;
    width: 213px;
    align-self: center;
  }
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid var(--light-green);
  width: 100%;
  border-radius: 8px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding: 8px;
`;

export default function Signup() {
  const ctx= useContext(SessionContext);
  const history= useHistory();
  const role= parseInt(sessionStorage.getItem('role')) 
  
  async function createUser(e){
    e.preventDefault();
    console.log(e.target);
    console.log(role);
    console.log(typeof role);
    const name= e.target.elements.name.value;
    const email= e.target.elements.email.value;
    const phone= e.target.elements.phone.value;
    const password= e.target.elements.password.value;
    const datauser = await AxiosCreateUser({ name, email, phone, role, password});
    await ctx.signIn(datauser.token, datauser.name, datauser.role);
    sessionStorage.setItem("token", await datauser.token)
    console.log(await datauser);
    history.push("/home");
  }

  return (
    <>
      <PageSignUp>
      <Title style={{fontSize:36, color: 'var(--dark-gray)'}}>{role===1? "Welcome Admin!": "Welcome Pichanguero!"}</Title>
        <ContainerForm>
          <Title  style={{color: 'var(--dark-gray)'}}>Create your Account</Title>
          <FormData onSubmit={createUser}>
            <LabelForm>Name</LabelForm>
            <Input type="text" name="name" placeholder="Aldito Cuba"></Input>
            <LabelForm>Email</LabelForm>
            <Input type="email" name="email" placeholder="elgatocanales@mail.com"></Input>
            <LabelForm>Phone</LabelForm>
            <Input type="phone" name="phone" placeholder="951236547"></Input>
            <LabelForm>Password</LabelForm>
            <Input type="password" name="password" placeholder="********"></Input>
            <ButtonGreen>Create account</ButtonGreen>
          </FormData>
        </ContainerForm>
      </PageSignUp>
    </>
  );
}
