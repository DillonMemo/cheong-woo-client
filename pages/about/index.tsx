import React from "react";
import styled from "styled-components";

/** components */
import Layout from "../../components/Layout";
import InformationSection from "./InformationSection";

/** styles */
import { Image } from "../../utils/icons";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
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
        <div style={{ position: "absolute", top: "50%", left: "47.5%" }}>
          <Image width="4rem" height="4rem" stroke="black" strokeWidth={1} />
        </div>
      </FirstWrapper>
      <div className="container">
        <InformationSection />
      </div>
    </Layout>
  );
};

const FirstWrapper = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1482148454461-aaedae4b30bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"); */
  height: 60vh;
  background-color: rgba(112, 112, 112, 1);
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center 90%;
  background-repeat: no-repeat;
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
