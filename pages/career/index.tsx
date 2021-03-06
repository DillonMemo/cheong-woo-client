import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** components */
import Layout from "../../components/Layout";
import HumanResource from "./HumanResource";
import Welfare from "./Welfare";
import Organization from "./Organization";
import Recruit from "./Recruit";
import Cooperative from "./Cooperative";

const attributeLayout = {
  title: "청우종합건설 | Career",
  description: "Cheong Woo | Career",
  imageUrl: "http://placehold.it/600x400",
};

const Career: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Layout {...attributeLayout}>
      <FirstWrapper className="title-content">
        <Title>
          <p>Home &gt; Career</p>
          <span>Career</span>
        </Title>
        {/* <div style={{ position: "absolute", top: "47.5%", left: "47.5%" }}>
          <Image width="4rem" height="4rem" stroke="black" strokeWidth={1} />
        </div> */}
      </FirstWrapper>
      <div className="container">
        <HumanResource />
        <Welfare />
        <Organization />
        <Recruit />
        <Cooperative />
      </div>
    </Layout>
  );
};

const FirstWrapper = styled.div`
  background-image: url("/static/career.jpg");
  height: 60vh;
  /* background-color: rgba(112, 112, 112, 1); */
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center 90%;
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

export default Career;
