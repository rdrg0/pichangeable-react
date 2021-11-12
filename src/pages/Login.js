
import styled from "@emotion/styled";
import { LabelForm} from "../component/UI/Typography"
import { ButtonGreen } from "../component/UI/Buttons"

const Login = styled.div`
    display:flex;
    height: 704px;
    background: rgb(0,0,0);
background: linear-gradient(0deg, white 50%, var(--light-green) 50%, var(--green) 50%);

`
const ContainerForm = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    width: 380px;
    height: 268px;
    background: white;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 0px ;
    gap: 8px;
    border: 2px solid var(--dark-green);
    margin: 0 auto;
    align-self: center;
`

const Title= styled.label`
    font-family: Montserrat;
    font-size: 24px;
    line-height: 32px;
    align-self: center;
`

const FormData = styled.form`
    display: flex;
    flex-direction:column;
    padding: 8px;
    button{
        margin-top:4px;
        align-self: center;
    }
`

const Input = styled.input`
    height: 40px;
    border: 1px solid var(--light-green);
    width: 100%;
    border-radius:8px;
    margin-top:8px;
    margin-bottom:8px;
    padding: 8px;
`

export default function Signup() {
    return (
        <>
          <Login>  
            <ContainerForm>
                <Title>Login with your Account</Title>
                <FormData>
                    <LabelForm>Email</LabelForm>
                    <Input type="email" placeholder="elgatocanales@mail.com" ></Input>
                    <LabelForm>Password</LabelForm>
                    <Input type="password" placeholder="********" ></Input>
                    <ButtonGreen>Sign In</ButtonGreen>
                </FormData>
            </ContainerForm>
            </Login>  
        </>
    )

}