import styled from "@emotion/styled";
import {FontHeaderLabel} from "./UI/Typography";

export const Footer = () => {
    return (
        <FooterContainer>

          <DivFooter>
            <FontHeaderLabel>© 2021 - Pichangueable</FontHeaderLabel>
            <FontHeaderLabel>Codeable - Cohort 3 Final Project</FontHeaderLabel>
          </DivFooter>

          <DivFooter>
            <FontHeaderLabel>Build with ❤ by:</FontHeaderLabel>
          </DivFooter>
      
          <DivFooter>
            <FontHeaderLabel>Source code:</FontHeaderLabel>
            <FontHeaderLabel>Ruby on Rails REST API</FontHeaderLabel>
            <FontHeaderLabel>React Responsive SPA</FontHeaderLabel>
          </DivFooter>
          
        </FooterContainer>
    );
};

const FooterContainer = styled.div`
  display: flex;
  flex-direction:row;
  `;


const DivFooter = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `;