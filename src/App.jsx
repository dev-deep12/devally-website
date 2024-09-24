import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Corrected importe
import "./App.css";
import Home from "./pages/home/Home";
import Services from "./pages/support/Support";
import AboutUs from "./pages/about/About";
import ContactUs from "./pages/contact/Contact";
import styled from "styled-components";
import LandingPage from "./pages/landing-page";
import Logo from "./components/logo";
function App() {
  return (
    <Router>
      <Logo />
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/team-overview" element={<TeamOverView />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

const AppWrrappe = styled.div``;

export default App;
