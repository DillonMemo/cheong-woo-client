import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { defaultPalette, md, sm } from "../../utils/styles";

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
          <div className="welfare-container" />
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
    align-items: center;
    flex-flow: column wrap;

    .title-container {
      text-align: center;
      margin-top: 3rem;
    }

    .container {
      height: 30rem;
      display: flex;
      align-items: center;
      color: ${defaultPalette.accent2};

      ${sm} {
        height: 15rem;
      }

      .welfare-container {
        width: 54rem;
        height: 100%;
        background: url("/static/welfare.png") no-repeat center/contain;

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

export default Welfare;
