import styled from "@emotion/styled";
import cancha from "./UI/cancha8.jpg"
import Map from "./Map"
import { FontMediumGray, FontSizeBig, TitleGraySmaller } from "./UI/Typography";
import { ButtonGreen, ButtonWhite } from "./UI/Buttons";
import { SportIcon,PersonIcon,FieldIcon } from "./UI/Icons";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { useState } from "react";
import React from "react";

const useStyles = makeStyles((theme)=>({
    modal:{
        position: "absolute",
        width:"50%",
        height:"70%",
        backgroundColor: "transparent",
        borderRadius: "8px",
        border:"transparent",
        marginTop: "4%",
        margin: "0 auto",
        padding: "25px"
        }
    })
)
const DetailContainer = styled.div`
    display:flex;
    background: white;
    flex-direction:row;
    padding-top: 10px;
    gap: 60px;
    padding:20px;
    margin:8px;
    position: relative;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap: 15px;
    width:50%;
    margin:0; 
    padding:20px;
    margin-left:10px;
    img{
        width:80%;
        height:65%;  
        margin:0 auto;
        border-radius: 16px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        margin-top: 8px;
    }
    button{
        align-self: center;
    }
`


const ContainerImportant=styled.div`
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

const ContainerVertical=styled.section`
    display:flex;
    flex-direction:column;
    margin:0px 25px;
    gap:10px;
`

const DivBorder = styled.div`
    display:flex;
    flex-direction:row;
    gap:40px;
    justify-content: space-between;
    padding-top:15px;
    border-top: 3px solid var(--dark-green);
    padding-bottom:15px;
    border-bottom: 3px solid var(--dark-green);
    margin:0px 25px;
    div{
        display:flex;
        flex-direction:row;
        gap:5px;
        align-items: center;
    }
`

export default function DetailField({name, sport_type, field_type, capacity, summary, price_hour, address}){
  const styles=useStyles();
  const [modal, setModal] = useState(false);
  const openModal = () =>{
      setModal(!modal);
  }
  const body = (
      <div className={styles.modal} 
      style={{width: '100%', 
              height: '100%', 
              backgroundColor:"white",
              display: 'flex',
              flexDirection: 'column',
              gap:"30px"
              }
            }>
            <FontMediumGray style={{fontWeight: 1000,fontSize: 26}}>Contact To Book</FontMediumGray>
            <FontMediumGray>We are working with the facility owner to provide online booking of this facility.
            In the meantime, please contact the facility owner to enquire about a booking.</FontMediumGray>
            <FontMediumGray style={{fontWeight: 1000,fontSize: 26,alignSelf: 'center'}}>Please Contact:</FontMediumGray>
            <FontMediumGray style={{alignSelf: 'center'}}>020 7095 5100</FontMediumGray>
            <div  style={{display: 'flex',justifyContent: 'center', flexDirection: 'row', gap: 30, paddingBottom:0}}>
                <ButtonWhite>I was enable to <br />booking this facility</ButtonWhite>
                <ButtonGreen>I succesfully booked<br /> this facility</ButtonGreen>
            </div>
            <button style={{border: "transparent", backgroundColor: "transparent", textAlign: "right", 
                    fontFamily: "Inter",
                    fontSize: 18,
                    letterSpacing: 1.25,
                    paddingRight:45,
                    color: "var(--dark-gray)",
                    textTransform: "uppercase"}}onClick={openModal}>Cancel</button>
      </div>
  )

  return (
      <>
      <DetailContainer>
        <Details style={{borderRight: "3px solid var(--light-gray)"}}>
            <ContainerVertical>
                <ContainerImportant>
                    <TitleGraySmaller>{name}</TitleGraySmaller>
                    <TitleGraySmaller>S/.{price_hour}</TitleGraySmaller>
                </ContainerImportant>
                <ContainerImportant>
                    <FontMediumGray>{address}</FontMediumGray>
                    <FontMediumGray>El Agustino</FontMediumGray>
                </ContainerImportant>
            </ContainerVertical>
            <DivBorder>
                    <div><SportIcon/><TitleGraySmaller>{sport_type}</TitleGraySmaller></div>
                    <div><FieldIcon/><TitleGraySmaller>{field_type}</TitleGraySmaller></div>
                    <div><PersonIcon/><TitleGraySmaller>{capacity}-{capacity}</TitleGraySmaller></div>
            </DivBorder>
            <img src={cancha} alt="image_de_cancha"/>
            <ContainerVertical>
                <FontSizeBig style={{color:"var(--dark-green)"}}>Acerca de la cancha...</FontSizeBig>
            <FontMediumGray>
            {summary}
            </FontMediumGray>
            </ContainerVertical>
        </Details>
        
        <Details>
            <FontSizeBig style={{color:"var(--dark-green)"}}>Location</FontSizeBig>
            <Map 
                x={Math.random()*-1.0120}
                y={Math.random()*-1.12}
            />
            <FontSizeBig style={{color:"var(--dark-green)"}}>Make a Booking</FontSizeBig>
            <FontMediumGray>To reserve this venue, click the button below to reach out directly.</FontMediumGray>
            <ButtonGreen onClick={openModal}>Book Facility</ButtonGreen>
            <Modal  className={styles.modal}
                open={modal}
                onClose={openModal}>
                  {body}
                </Modal>
        </Details>
      </DetailContainer>
      </>
    );
  }
