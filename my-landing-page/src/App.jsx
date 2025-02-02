import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </>
  );
}

export default App;
