import styled from "@emotion/styled";
import cancha from "./UI/cancha8.jpg"
const DetailContainer = styled.div`
    display:flex;
    height: 704px;
    background: white;
    flex-direction:row;
    padding-top: 64px;
    gap: 44px;
    padding:16px;
    margin:16px;
`

const Aside = styled.aside`
    display:flex;
    height: 704px;
    width: 20%;
    background: var(--light-green);
`

const Details = styled.div`
    display:flex;
    height: 704px;
    width: 80%;
    background: var(--light-green);
    flex-direction:column;
    align-items:center;
    padding:16px;
    gap: 16px;
    img{
        width:20%;
        height:40%;  
    }
`

export default function DetailField(){
  return (
      <DetailContainer>
        <Details>
            <img src={cancha} alt="image_de_cancha"/>
            <div>
                <div>
                    <label>Tu Pelotita</label>
                    <label>$15</label>
                </div>
                <div>
                    <label>Esta es la dirección</label>
                    <label>Este es el Distrito</label>
                </div>
            </div>
            <div></div>
            <label>Acerca de la cancha...</label>
            <label>Esta es una descripció de la cancha que jugan varias personas</label>


        </Details>
        <Aside>Hola</Aside>
      </DetailContainer>
    );
  }
