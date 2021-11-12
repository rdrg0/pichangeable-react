import styled from "@emotion/styled";
import {FontHeaderLabel} from "./UI/Typography";
import { GithubIcon } from "./UI/Icons";
import { ReactIcon } from "./UI/Icons";
import { RubyIcon } from "./UI/Icons";

export const Footer = () => {
    return (
        <FooterContainer>

          <DivFooter>
            <FontHeaderLabel>© 2021 - Pichangueable</FontHeaderLabel>
            <FontHeaderLabel>Codeable - Cohort 4 Final Project</FontHeaderLabel>
          </DivFooter>

          <DivFooter>
            <FontHeaderLabel style={{marginBottom:'8px'}} >Build with ❤ by:</FontHeaderLabel>
            <DivAuthors>
            <DivFooter>
            <FontHeaderLabel>
              <GithubIcon/>
              <p>Aldo Canales</p>
            </FontHeaderLabel>
            <FontHeaderLabel>
              <GithubIcon/>
              <p>Ana Maria Zárate</p>
            </FontHeaderLabel>
            <FontHeaderLabel>
              <GithubIcon/>
              <p>Eder Rocca</p>
            </FontHeaderLabel>
            </DivFooter>
            <DivFooter>
            <FontHeaderLabel>
              <GithubIcon/>
              <p>Nathaly Linares</p>
            </FontHeaderLabel>
            <FontHeaderLabel>
              <GithubIcon/>
              <p>Rodrigo Arriarán</p>
            </FontHeaderLabel>
            </DivFooter>
            </DivAuthors>
          </DivFooter>
      
          <DivFooter>
            <FontHeaderLabel style={{marginBottom:'8px'}}>
              Source code:
            </FontHeaderLabel>
            <FontHeaderLabel>
              <RubyIcon/>
              <p>Ruby on Rails REST API</p>
            </FontHeaderLabel>
            <FontHeaderLabel>
              <ReactIcon/>
              <p>React Responsive SPA</p>
            </FontHeaderLabel>
          </DivFooter>

        </FooterContainer>
    );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-around;
  align-items: center;
  padding: 5% 0% 5% 0%;
  margin-bottom:0%;
  width: 100%;
  `;


const DivFooter = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  `;

const DivAuthors = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10%;
  width: 120%;
  `;
