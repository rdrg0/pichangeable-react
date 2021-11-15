import React from "react";
import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import { FontSizeBig, FontSizeMedium } from "./UI/Typography";
import { FieldIcon, SportIcon, LocationIcon } from "./UI/Icons";
import { useHistory } from "react-router";

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
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
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

export default function ListItem({id,image, price_hour, name, address, field_type, sport_type, location,summary,capacity}) {
  const history = useHistory();
  function ShowDetails(e) {
    // let id=e.target.id;
    // console.log(id,image, price_hour, name, address, field_type, sport_type, location,summary,capacity);
    let field={id,image, price_hour, name, address, field_type, sport_type, location,summary,capacity};
    sessionStorage.setItem("selectedField", JSON.stringify(field));
    history.push("/detailfield")
  }
  return (
    <>
      <Card key={id} onClick={ShowDetails}>
        <div className="image">
          <img src={image} alt="imagen de una cancha" />
        </div>
        <div className="information">
          <FontSizeBig>${price_hour}</FontSizeBig>
          <FontSizeMedium>{name.charAt(0).toUpperCase() + name.slice(1)}</FontSizeMedium>
        </div>
        <div className="address">
          <label style={{fontSize: 15, color: "var(--dark-gray)"}}>{address.charAt(0).toUpperCase() + address.slice(1)}</label>
        </div>
        <div className="icons">
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <FieldIcon/>
            <label  style={{fontSize: 16, color: "var(--dark-gray)"}}>{field_type.charAt(0).toUpperCase() + field_type.slice(1)}</label>
          </div>
          <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <SportIcon/>
            <label  style={{fontSize: 16, color: "var(--dark-gray)"}}>{sport_type.charAt(0).toUpperCase() + sport_type.slice(1)}</label>
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
