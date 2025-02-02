import React from "react";
import styled from "styled-components";
import heroImage from "../assets/images/hero-image.png";

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  background: #f9f9f9;
`;

const TextSection = styled.div`
  max-width: 50%;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #333;
  span {
    color: #007bff;
  }
`;

const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 12px 24px;
  font-size: 18px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled.img`
  max-width: 40%;
  height: auto;
`;

function HeroSection() {
  return (
    <HeroContainer>
      <TextSection>
        <Title>
          Experienced <span>mobile and web</span> developers.
        </Title>
        <Description>
          We specialize in building modern web and mobile applications.
        </Description>
        <Button>Get Started</Button>
      </TextSection>
      <Image src={heroImage} alt="Hero" />
    </HeroContainer>
  );
}

export default HeroSection;
