import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import {JoinIcon , LoginIcon, LupitaIcon} from "./UI/Icons";
import {ButtonWhite , ButtonGreen} from "./UI/Buttons";
import { TitleGreen,TitleGray } from "./UI/Typography";

const HeaderContainer = styled.div`
    padding: unset;
    display: grid;
    width: 100%;
    height: 100px;
    grid-template-columns: 60% 40%;
    flex-direction: row;
    align-items: center;
    background-color: white;
    .buttons{
        display: flex;
        flex-direction: row;
        gap: 30px;
        align-items: center;
    }
    .logo{
        margin:20px;
        display:flex;
        flex-direction: row;
    }
`
const ContainerSearch = styled.div`
    width: 300px;
    vertical-align: middle;
    position: relative;
    display: flex;
    gap: 12px;
    align-items: center;
    input{
            font: Inter;
            size: 14px;
            line-height:24px;
            letter-spacing: 1.25px;
            align-items: center;
            color: var(--gray);
            width: 249px;
            height: 38px;
            padding: 8px;
            border: none;
            ::placeholder { 
                color: var(--gray);
                font-family: Inter;
                font-size: 16px;
                line-height: 24px;
                letter-spacing: 1.25px;
                text-transform: uppercase;
                }
        }
    
    
`

export default function Header(){
    return(        
        <HeaderContainer>
            <div className="logo">
                    <TitleGray>Pichangue</TitleGray>
                    <TitleGreen>able</TitleGreen>
            </div>
            <div className="buttons">
                <ContainerSearch>
                    <label htmlFor="search"><LupitaIcon /></label>
                    <input type="search" id="search" placeholder="Find your field ... "/>
                </ContainerSearch>
                <ButtonWhite><JoinIcon/>Join</ButtonWhite>
                <ButtonGreen><LoginIcon/>Login</ButtonGreen>
            </div>
        </HeaderContainer>
        
    )
}