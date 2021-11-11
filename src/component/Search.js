import { FontSizeSmall } from "./UI/Typography";
import styled from "@emotion/styled";
import { ButtonGreen } from "./UI/Buttons";

export const Search = () => {
  return (
    <SearchContainer>
      <SearchDiv>
        <FontSizeSmall style={{letterSpacing: '1.5px', textAlign: 'left'}}>I’M LOOKING FOR</FontSizeSmall>
        <InputSelect>
          <option value="value1">Value 1</option>
          <option value="value2" selected>Footbal field</option>
          <option value="value3">Value 3</option>
        </InputSelect>
      </SearchDiv>
      <SearchDiv>
        <FontSizeSmall style={{letterSpacing: '1.5px', textAlign: 'left'}}>I WANT TO</FontSizeSmall>
        <InputSelect>
          <option value="value1">Value 1</option>
          <option value="value2" selected>Footbal field</option>
          <option value="value3">Value 3</option>
        </InputSelect>
      </SearchDiv>
      <SearchDiv>
        <FontSizeSmall style={{letterSpacing: '1.5px', textAlign: 'left'}}>WHERE</FontSizeSmall>
        <InputSelect>
          <option value="value1">Value 1</option>
          <option value="value2" selected>Footbal field</option>
          <option value="value3">Value 3</option>
        </InputSelect>
      </SearchDiv>
      <ButtonGreen style={{fontSize:'14px'}}>SEARCH</ButtonGreen>
    </SearchContainer>
  )
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 8px 16px;
  position: absolute;
  width: 800px;
  height: 72px;
  background: var(--white);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  border-right: solid 1px #E1E2E1; 
`;

const InputSelect = styled.select`
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border: none;
  color: var(--dark-gray);
  letter-spacing: 1.5px;
  margin-top: 8px;
`;