import styled from "@emotion/styled";
/** @jsxImportSource @emotion/react */
import cancha  from "./UI/cancha8.jpg"
import {  FontSizeBig,  FontSizeMedium } from "./UI/Typography";

const Card = styled.li`
    padding: unset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 360px;
    background: #FFFFFF;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin: 0px ;
    gap: 8px;
    border-bottom: 12px solid var(--dark-green);
    .image{
        width:300px;
        height:200px;
        img{
            width:100%;
            height:100%;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
        }
    }
    .information{
        display:flex;
        flex-direction: row;
        padding:4px;
        text-align: center;
        width: 100%;
        justify-content: space-around;
        h4{
            align-self: center;
        }
    }
    .address{
        text-align: center;

    }
    .icons{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        gap: 35px;
    }
  `

export default function ListItem() {
    return (
        <>
        <Card key={1}>
            <div className="image">
                <img src={cancha} alt="imagen de una cancha" />
            </div>
            <div className="information">
                <FontSizeBig>$15</FontSizeBig>
                <FontSizeMedium>Tu Pelotita</FontSizeMedium>
            </div>
            <div className="address">
                <label>Apt. 325 29166 Wuckert Heights, Adamland, MT 17471</label>
            </div>
            <div className="icons">
                <label>Grass</label>
                <label>Futbol</label>
                <label>S.J.M.</label>
            </div>
        </Card>
        </>
      );
    }