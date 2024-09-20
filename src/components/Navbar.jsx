import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Corrected from useNavigation
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GlassCard from "./glasscard/GlassCard";
import XIcon from "@mui/icons-material/X";
import GroupsIcon from "@mui/icons-material/Groups";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import RecentActorsIcon from "@mui/icons-material/RecentActors";

const Home = () => <h1 className="headingGlassCard">Home</h1>;
const AboutUs = () => <h1 className="headingGlassCard">About Us</h1>;
const Services = () => <h1 className="headingGlassCard">Services</h1>;
const ContactUs = () => <h1 className="headingGlassCard">Contact Us</h1>;

export default function Navbar() {
  const navigate = useNavigate(); // Correct hook for navigation
  const [hoveredComponent, setHoveredComponent] = useState(null);
  const [isGlassCardOpen, setIsGlassCardOpen] = useState(false);
  const [clickedComponent, setClickedComponent] = useState(null); // Track which component is clicked

  const style = {
    fontSize: "10px",
    color: "white",
  };

  const tempMap = {
    Home: {
      navigateTo: "/home",
      component: <Home style={{ ...style }} />,
      icon: HomeRoundedIcon,
      text: "Home",
    },
    AboutUs: {
      navigateTo: "/about-us",
      component: <AboutUs />,
      icon: GroupsIcon,
      text: "About Us",
    },
    Services: {
      navigateTo: "/services",
      component: <Services />,
      icon: SettingsSuggestOutlinedIcon,
      text: "Services",
    },
    ContactUs: {
      navigateTo: "/contact-us",
      component: <ContactUs />,
      icon: RecentActorsIcon,
      text: "Contact Us",
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
    const route = tempMap[component].navigateTo;

    navigate(route);
    setIsGlassCardOpen(false); // close the glass card
    setClickedComponent(component); // set the clicked component to keep the text shown
  };

  return (
    <NavbarDiv>
      <NavItems>
        {Object.keys(tempMap).map((key) => {
          const IconComponent = tempMap[key].icon;
          const isHovered = hoveredComponent === key;
          const isClicked = clickedComponent === key;

          return (
            <NavButtonsBorder
              key={key}
              onMouseEnter={() => handleHover(key)}
              onMouseLeave={clearHover}
              onClick={() => handleNavigation(key)}
              isHovered={isHovered || isClicked}
            >
              <NavButtonsWrapper>
                <IconComponent sx={{ color: "white", fontSize: "35px" }} />
                <NavButtonsText isHovered={isHovered || isClicked}>
                  {tempMap[key].text}
                </NavButtonsText>
              </NavButtonsWrapper>
            </NavButtonsBorder>
          );
        })}
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

      {isGlassCardOpen && (
        <GlassCard>
          {hoveredComponent && tempMap[hoveredComponent].component}
        </GlassCard>
      )}
    </NavbarDiv>
  );
}

const NavbarDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  justify-content: space-around;

  position: fixed;
  left: 0;
  top: 0;
  padding: 10px;
  margin-left: 1rem;
  height: 100%;

  /* background-color: rgba(0, 0, 0, 0.6); */
`;

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;

  /* align-items: center; */
`;

const NavButtonsBorder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  width: 9rem;
  padding: 0 1rem;
  border-radius: 25px;
  border: 1px solid transparent;

  transition: border-color 0.3s ease, background-color 0.3s ease;

  ${({ isHovered }) =>
    isHovered &&
    `
      border-color: rgba(209, 213, 219, 0.3);
      background-color: rgba(255, 255, 255, 0.1) ;
    `}

  &:hover {
    background-color: transparent;
  }
`;

const NavButtonsWrapper = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  color: white;
  justify-content: center;
  align-items: center;
`;

const NavButtonsText = styled.span`
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.3s ease;
  white-space: nowrap;
  color: white;
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
