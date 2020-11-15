import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { defaultPalette, md, sm } from "../../utils/styles";

const HumanResource: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="humanResource">
      <div className="wrapper">
        <div className="title-container" data-aos="zoom-in-up">
          <MessageTitleWithUnderline>인재상</MessageTitleWithUnderline>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <div className="human-resource-container" />
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  background-color: #f8f8f9;
  .wrapper {
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-flow: column wrap;

    .title-container {
      margin-top: 3rem;
      text-align: center;
    }

    .container {
      height: 30rem;
      display: flex;
      align-items: center;
      color: ${defaultPalette.accent2};

      ${sm} {
        height: 15rem;
      }

      .human-resource-container {
        width: 54rem;
        height: 100%;
        background: url("/static/humanresource.png") no-repeat center/contain;

        ${md} {
          width: 45rem;
        }

        ${sm} {
          width: 20rem;
        }
      }
    }
  }
`;

export default HumanResource;
