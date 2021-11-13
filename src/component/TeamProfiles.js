import React from "react";
import styled from "@emotion/styled";
import { FontSizeMedium } from "./UI/Typography";
import { LinkendinIcon } from "./UI/Icons";
import { GithubIcon } from "./UI/Icons";
import AldoCanales from "./Avatars/AldoCanales.jpeg";
import AnaMaria from "./Avatars/AnaMariaZarate.jpeg";
import EderRocca from "./Avatars/EderRocca.jpeg";
import NatLinares from "./Avatars/NatLinares.jpeg";
import RodrigoArriaran from "./Avatars/RodrigoArriaran.jpeg";

export const TeamProfiles = () => {
  return (
    <TeamProfilesContainer>
      <TeamProfile>
        <TeamProfileImage src={AnaMaria} alt="Ana Maria" />
        <FontSizeMedium style={{fontSize:'20px'}}>Ana Zárate</FontSizeMedium>
        <Icons>
          <LinkendinIcon />
          <GithubIcon />
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={AldoCanales} alt="Aldo Canales" />
        <FontSizeMedium style={{fontSize:'20px'}}>Aldo Canales</FontSizeMedium>
        <Icons>
          <LinkendinIcon />
          <GithubIcon />
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={EderRocca} alt="Eder Rocca" />
        <FontSizeMedium style={{fontSize:'20px'}}>Eder Rocca</FontSizeMedium>
        <Icons>
          <LinkendinIcon />
          <GithubIcon />
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={NatLinares} alt="Nat Linares" />
        <FontSizeMedium style={{fontSize:'20px'}}>Nathaly Linares</FontSizeMedium>
        <Icons>
          <LinkendinIcon />
          <GithubIcon />
        </Icons>
      </TeamProfile>

      <TeamProfile>
        <TeamProfileImage src={RodrigoArriaran} alt="Rodrigo Arriaran" />
        <FontSizeMedium>Rodri Arriarán</FontSizeMedium>
        <Icons>
          <LinkendinIcon />
          <GithubIcon />
        </Icons>
      </TeamProfile>
    </TeamProfilesContainer>
  );
};

const TeamProfilesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
  width: 100%;
  background-color: var(--white);
  padding: 5%;
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
  justify-content: center;
  align-items: flex-end;
  margin-top: 5%;
  gap: 15%;
  width: 100%;
  height: 10%;
`;
