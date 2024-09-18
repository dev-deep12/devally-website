import React from "react";
import styled from "styled-components";

export default function GlassCard({ children }) {
  return <Card>{children}</Card>;
}

const Card = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  width: 50em;
  height: 30em;
  padding: 20px;

  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);

  transition-property: transform, opacity;
  transition-duration: 0.1s;
  transition-timing-function: ease;
  transform: translateX(0);
  opacity: 100%;

  /* Make the transition infinite */
  animation: slideAndFade 1s;

  @keyframes slideAndFade {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
