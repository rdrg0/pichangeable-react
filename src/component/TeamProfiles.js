import styled from "@emotion/styled";
import { FontSizeMedium } from "./UI/Typography";
import { LinkendinIcon } from "./UI/Icons";
import { GithubIcon } from "./UI/Icons";
import AldoCanales from "./Avatars/AldoCanales.jpeg";
import AnaMaria from "./Avatars/AnaMariaZarate.jpeg";
import EderRocca from "./Avatars/EderRocca.png";
import NatLinares from "./Avatars/NatLinares.jpeg";
import RodrigoArriaran from "./Avatars/RodrigoArriaran.jpeg";

export const TeamProfiles = () => {
  return (
    <TeamProfilesContainer>
      <TeamProfile>
        <TeamProfileImage src={AnaMaria} alt="Ana Maria" />
        <FontSizeMedium>Ana Maria Zárate</FontSizeMedium>
        <Icons>
          <LinkendinIcon/>
          <GithubIcon/>
        </Icons>
      </TeamProfile>


      <TeamProfile>
        <TeamProfileImage src={AldoCanales} alt="Aldo Canales" />
        <FontSizeMedium>Aldo Canales</FontSizeMedium>
        <Icons>
          <LinkendinIcon/>
          <GithubIcon/>
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={EderRocca} alt="Eder Rocca" />
        <FontSizeMedium>Eder Rocca</FontSizeMedium>
        <Icons>
          <LinkendinIcon/>
          <GithubIcon/>
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={NatLinares} alt="Nat Linares" />
        <FontSizeMedium>Nathaly Linares</FontSizeMedium>
        <Icons>
          <LinkendinIcon/>
          <GithubIcon/>
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={RodrigoArriaran} alt="Rodrigo Arriaran" />
        <FontSizeMedium>Rodrigo Arriarán</FontSizeMedium>
        <Icons>
          <LinkendinIcon/>
          <GithubIcon/>
        </Icons>
      </TeamProfile>

    </TeamProfilesContainer>
  )
}

const TeamProfilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  gap: 5%;
  width: 80%;
  `;

const TeamProfile = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
`;

const TeamProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: flex-end;
  margin-top: 5%;
  gap: 15%;
  width: 100%;
  height: 10%;
`;