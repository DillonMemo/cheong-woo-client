import React from "react";
import styled from "styled-components";

/** components */
import Layout from "../../components/Layout";
import InformationSection from "./InformationSection";
import GreetingsSection from "./GreetingsSection";
import HistorySection from "./HistorySection";
import AddressSection from "./AddressSection";
import PartnersSection from "./PartnersSection";

const attributeLayout = {
  title: "청우종합건설 | About",
  description: "Cheong Woo | About",
  imageUrl: "http://placehold.it/600x400",
};

const About: React.FC = () => {
  return (
    <Layout {...attributeLayout}>
      <FirstWrapper className="title-content">
        <Title>
          <p>Home &gt; About</p>
          <span>About</span>
        </Title>
      </FirstWrapper>
      <div className="container">
        <InformationSection />
        <GreetingsSection />
        <HistorySection />
        <AddressSection />
        <PartnersSection />
      </div>
    </Layout>
  );
};

const FirstWrapper = styled.div`
  background-image: url("/static/about.jpeg");
  height: 60vh;
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.div`
  margin: 2rem 0;

  p {
    font-size: 1rem !important;
  }

  span {
    font-size: 3.5rem;
  }
`;

export default About;
