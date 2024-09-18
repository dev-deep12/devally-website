import React, { useState } from "react";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GlassCard from "./glasscard/GlassCard";
import XIcon from "@mui/icons-material/X";
import { useNavigate } from "react-router-dom"; // Corrected from useNavigation

const Home = () => {
  return <h1 className="headingGlassCard">Home</h1>;
};
const AboutUs = () => {
  return <h1 className="headingGlassCard">About Us</h1>;
};
const Services = () => {
  return <h1 className="headingGlassCard">Services</h1>;
};
const Products = () => {
  return <h1 className="headingGlassCard">Products</h1>;
};
const TeamOverView = () => {
  return <h1 className="headingGlassCard">Team Overview</h1>;
};
const ContactUs = () => {
  return <h1 className="headingGlassCard">Contact Us</h1>;
};

export default function Navbar() {
  const navigate = useNavigate(); // Correct hook for navigation
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isGlassCardOpen, setIsGlassCardOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    console.log("toggle drawer", newOpen);
    setIsOpen(newOpen);
  };

  const tempMap = {
    Home: {
      navigateTo: "/home",
      component: <Home />,
    },
    AboutUs: {
      navigateTo: "/about-us",
      component: <AboutUs />,
    },
    Services: {
      navigateTo: "/services",
      component: <Services />,
    },
    Products: {
      navigateTo: "/products",
      component: <Products />,
    },
    TeamOverView: {
      navigateTo: "/team-overview",
      component: <TeamOverView />,
    },
    ContactUs: {
      navigateTo: "/contact-us",
      component: <ContactUs />,
    },
  };

  const handleHover = (componentName) => {
    setHoveredComponent(componentName);
    setIsGlassCardOpen(true);
  };

  const clearHover = () => {
    setHoveredComponent(null);
    setIsGlassCardOpen(false);
  };

  const handleNavigation = (component) => {
    setIsOpen(false);
    toggleDrawer(false);
    setIsGlassCardOpen(false);

    const route = tempMap[component].navigateTo;
    navigate(route);
  };

  return (
    <NavbarDiv>
      <MenuButton onClick={toggleDrawer(!isOpen)}>
        {!isOpen ? (
          <DensityMediumSharpIcon sx={{ color: "white" }} />
        ) : (
          <ClearSharpIcon sx={{ color: "white" }} />
        )}
      </MenuButton>
      <Drawer
        variant="persistent"
        hideBackdrop
        open={isOpen}
        onClose={toggleDrawer(false)}
      >
        <NavItems>
          {Object.keys(tempMap).map((key) => (
            // <NavButtonsWrapper>
            <NavButtonsBorder>
              <NavButtons
                key={key}
                onMouseEnter={() => handleHover(key)}
                onMouseLeave={clearHover}
                onClick={() => handleNavigation(key)}
              >
                {key}
              </NavButtons>
            </NavButtonsBorder>
            // </NavButtonsWrapper>
          ))}
        </NavItems>
        <Icons>
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <XIcon />
          </div>
        </Icons>
      </Drawer>
      {isGlassCardOpen && (
        <GlassCard>
          {hoveredComponent && tempMap[hoveredComponent].component}
        </GlassCard>
      )}
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  height: 50px;
  .MuiPaper-root {
    width: 30%;
    display: flex;
    flex-direction: column;
    row-gap: 10em;
    padding-top: 3em;
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
  }
`;
const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3em;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const MenuButton = styled.div`
  padding-top: 1em;
  padding-left: 97%;
`;
const NavButtons = styled.div`
  color: white;
  cursor: pointer;
`;
const NavButtonsBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%;
  width: 60%; */
  height: 2.6rem;
  width: 15rem;
  border-radius: 25px;
  /* Initially, hide the border */
  border: 1px solid transparent;
  transition: border-color 0.3s ease; /* Add a smooth transition effect */

  &:hover {
    /* When hovering, show the border */

    border-color: rgba(209, 213, 219, 0.3);
  }
`;
const NavButtonsWrapper = styled.div`
  width: 100%;
  height: 2.6rem;
`;
const Icons = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  justify-content: center;
  div {
    margin: 20px;
    color: white;
  }
`;
