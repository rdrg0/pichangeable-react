import styled from "@emotion/styled";
import { FontSizeMedium } from "./UI/Typography";
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
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={AldoCanales} alt="Aldo Canales" />
        <FontSizeMedium>Aldo Canales</FontSizeMedium>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={EderRocca} alt="Eder Rocca" />
        <FontSizeMedium>Eder Rocca</FontSizeMedium>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={NatLinares} alt="Nat Linares" />
        <FontSizeMedium>Nathaly Linares</FontSizeMedium>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={RodrigoArriaran} alt="Rodrigo Arriaran" />
        <FontSizeMedium>Rodrigo Arriarán</FontSizeMedium>
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
  width: 20%;
`;

const TeamProfileImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
`;