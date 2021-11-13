import React from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { JoinIcon, LoginIcon, LupitaIcon } from "./UI/Icons";
import { ButtonWhite, ButtonGreen } from "./UI/Buttons";
import { TitleGreen, TitleGray } from "./UI/Typography";
import logo from "./UI/logo.png";
const HeaderContainer = styled.div`
  padding: unset;
  display: grid;
  width: 100%;
  height: 100px;
  grid-template-columns: 60% 40%;
  padding-right:5%;
  flex-direction: row;
  align-items: center;
  background-color: white;
  .logo{
        margin:20px;
        display:flex;
        flex-direction: row;
        align-items: center;
        img{
            height:70px;
            width:70px;
            margin: initial;
        }
    }
  .buttons {
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
    background-color: white;
    }
`
const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    input{
        vertical-align: middle;
        position: relative;        
        color: var(--gray);
        height: 38px;
        padding: 8px;
        border: none;
        font-family: Inter;
        ::placeholder {
        color: var(--dark-gray);
        font-family: Inter;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        }
    }
    
`;

export default function Header(){
    return(        
        <HeaderContainer style={{justifyContent: "space-between"}}>
            <div className="logo">
                    <img src={logo} alt="logo de pichangueable"/>
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
