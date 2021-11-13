import React from "react";
import styled from "@emotion/styled";

function Input({ Icon, id, label, width, ...props }) {
  const Container = styled.div`
    display: flex;
    align-items: center;
    width: ${width};
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
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Container>
        <Icon />
        <input id={id} {...props} />
      </Container>
    </>
  );
}

export default Input;
