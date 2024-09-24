import styled from "styled-components";
import React from "react";
import logoImage from "../../../assets/Logo.PNG";
import { useNavigate } from "react-router-dom";

export default function Logo() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <LogoContainer onClick={handleNavigation}>
      <img src={logoImage} alt="My Image" width="150px" height="70px" />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  position: fixed;
  left: 2.5rem;
  top: 2rem;
  width: 150px;
  height: 70px;
  overflow: hidden;
  z-index: 11;
  border-radius: 0.6rem;
`;
