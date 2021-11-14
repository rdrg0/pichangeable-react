import React from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { FontSizeBig, FontSizeMedium } from "./UI/Typography";
import { FieldIcon, SportIcon, LocationIcon } from "./UI/Icons";

const Card = styled.li`
  padding: unset;
  display: flex;
  flex-direction: column;
  width: 75%;
  height: 100%;
  align-items: center;
  align-self: center;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0px;
  gap: 10px;
  border-bottom: 12px solid var(--dark-green);
  .image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
    }
  }
  .information {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 100%;
    justify-content: space-around;
    h2 {
      color: var(--dark-green);
      align-self: center;
    }
    h4 {
      color: var(--dark-green);
      align-self: center;
    }
  }
  .address {
    text-align: center;
  }
  .icons {
    display: flex;
    flex-direction: row;
    gap: 0.6em;
    label{
      color: var(--dark-gray);
    }
  }
`;

export default function ListItem({image, price, name, address, field_type, sport_type, location}) {
  return (
    <>
      <Card key={1}>
        <div className="image">
          <img src={image} alt="imagen de una cancha" />
        </div>
        <div className="information">
          <FontSizeBig>$ {price}</FontSizeBig>
          <FontSizeMedium>{name}</FontSizeMedium>
        </div>
        <div className="address">
          <label style={{fontSize: 15, color: "var(--dark-gray)"}}>{address}</label>
        </div>
        <div className="icons">
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <FieldIcon/>
            <label  style={{fontSize: 16, color: "var(--dark-gray)"}}>{field_type}</label>
          </div>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <SportIcon/>
            <label  style={{fontSize: 16, color: "var(--dark-gray)"}}>{sport_type}</label>
          </div>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <LocationIcon/> 
            <label  style={{fontSize: 16, color: "var(--dark-gray)"}}>{location}</label>
          </div>
        </div>
      </Card>
    </>
  );
}
