import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { defaultPalette } from "../../utils/styles";

const Welfare: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="welfare">
      <div className="wrapper">
        <div className="title-container" data-aos="zoom-in-up">
          <MessageTitleWithUnderline>복지제도</MessageTitleWithUnderline>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <div className="undefined-container">
            <span>undefined section</span>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  .wrapper {
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    flex-flow: column wrap;

    .title-container {
      margin-top: 3rem;
    }

    .container {
      height: 30rem;
      display: flex;
      align-items: center;
      color: ${defaultPalette.accent2};
    }
  }
`;

export default Welfare;
