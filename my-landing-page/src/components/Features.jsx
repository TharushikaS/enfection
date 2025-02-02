import React from "react";
import styled from "styled-components";

const FeatureSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 50px;
  background: #fff;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 250px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  color: #007bff;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

function Features() {
  return (
    <FeatureSection>
      <FeatureCard>
        <FeatureTitle>Web Application</FeatureTitle>
        <FeatureDescription>We build modern web apps.</FeatureDescription>
      </FeatureCard>
      <FeatureCard>
        <FeatureTitle>Mobile Apps</FeatureTitle>
        <FeatureDescription>We develop Android & iOS apps.</FeatureDescription>
      </FeatureCard>
      <FeatureCard>
        <FeatureTitle>SEO</FeatureTitle>
        <FeatureDescription>We optimize your site for search engines.</FeatureDescription>
      </FeatureCard>
    </FeatureSection>
  );
}

export default Features;
