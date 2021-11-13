import styled from "@emotion/styled";
import cancha from "./UI/cancha8.jpg"
import Map from "./Map"
import { FontMediumGray, FontSizeBig, TitleGraySmaller } from "./UI/Typography";
import { ButtonGreen } from "./UI/Buttons";
import { SportIcon,PersonIcon,FieldIcon } from "./UI/Icons";

const DetailContainer = styled.div`
    display:flex;
    background: white;
    flex-direction:row;
    padding-top: 10px;
    gap: 60px;
    padding:20px;
    margin:8px;
`
const Details = styled.div`
    display:flex;
    flex-direction:column;
    gap: 15px;
    width:50%;
    margin:0; 
    padding:20px;
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
    margin-left:10px;
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

export default function DetailField(){
  return (
      <DetailContainer>
        <Details style={{borderRight: "3px solid var(--light-gray)"}}>
            <ContainerVertical>
                <ContainerImportant>
                    <TitleGraySmaller>Tu Pelotita</TitleGraySmaller>
                    <TitleGraySmaller>$15</TitleGraySmaller>
                </ContainerImportant>
                <ContainerImportant>
                    <FontMediumGray>Jr. Ceramicas 234</FontMediumGray>
                    <FontMediumGray>El Agustino</FontMediumGray>
                </ContainerImportant>
            </ContainerVertical>
            <DivBorder>
                    <div><SportIcon/><TitleGraySmaller>Soccer</TitleGraySmaller></div>
                    <div><FieldIcon/><TitleGraySmaller>Grass</TitleGraySmaller></div>
                    <div><PersonIcon/><TitleGraySmaller>11-11</TitleGraySmaller></div>
            </DivBorder>
            <img src={cancha} alt="image_de_cancha"/>
            <ContainerVertical>
                <FontSizeBig style={{color:"var(--dark-green)"}}>Acerca de la cancha...</FontSizeBig>
            <FontMediumGray>
            Unfortunately this sport and recreation facility currently does offer instant online booking via pitchbooking.com To speak with a member of staff at Whitechapel Sports Centre about the rental of their facilities, you will need to reach out directly via the contact details we have listed for Whitechapel Sports Centre, 55 Durward Street, London, E1 5BA.
            </FontMediumGray>
            </ContainerVertical>
        </Details>
        
        <Details>
            <FontSizeBig style={{color:"var(--dark-green)"}}>Location</FontSizeBig>
            <Map 
                x={Math.random(15)*-1.0120}
                y={Math.random(99)*-1.12}
            />
            <FontSizeBig style={{color:"var(--dark-green)"}}>Make a Booking</FontSizeBig>
            <FontMediumGray>To reserve this venue, click the button below to reach out directly.</FontMediumGray>
            <ButtonGreen>Book Facility</ButtonGreen>
        </Details>
      </DetailContainer>
    );
  }
