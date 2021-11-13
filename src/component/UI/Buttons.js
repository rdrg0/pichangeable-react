import styled from "@emotion/styled";

export const ButtonGreen = styled.button`
  padding: 8px 16px;
  height: 40px;
  color:white;
  display: flex;
  background: var(--light-green);
  border-radius: 8px;
  border: none;
  font-family: Inter;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;
  svg{
    margin: auto;
    margin-right: 10px;
    path{
        fill: white;
    }
  }

  :hover{
    cursor: pointer;
    background-color: var(--dark-green);
    border:none;
    svg{
        path{
            fill: white;
            }
    }
  }
  
`


export const ButtonWhite = styled.button`
  padding: 8px 16px;
  height: 40px;
  color: var(--dark-green);
  background: white;
  border-radius: 8px;
  border: 1px solid  var(--dark-green);
  font-family: Inter;
  display: flex;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  cursor: pointer;
  svg{
    margin: auto;
    margin-right: 10px;
    path{
        fill: var(--dark-green);
    }
  }
  :hover{
    cursor: pointer;
    background-color: var(--light-green);
    color: white;
    svg{
        path{
            fill: white;
            }
    }
  }
`