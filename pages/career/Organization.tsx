import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { defaultPalette, md, sm } from "../../utils/styles";

const Organization: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="organization">
      <div className="wrapper">
        <div className="title-container" data-aos="zoom-in-up">
          <MessageTitleWithUnderline>조직도</MessageTitleWithUnderline>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <div className="organization-container">
            <img
              src="/static/organization_txt.png"
              alt="organization-txt"
              className="organization-txt"
            />
          </div>
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
      text-align: center;
      margin-top: 3rem;
    }

    .container {
      height: 30rem;
      display: flex;
      align-items: center;
      color: ${defaultPalette.accent2};
      flex-flow: column nowrap;

      ${sm} {
        height: 15rem;
      }

      .organization-container {
        margin-top: 2rem;
        width: 54rem;
        height: 100%;
        background: url("/static/organization.png") no-repeat center/contain;

        .organization-txt {
          width: 15rem;
          height: auto;
          margin-top: 1.2rem;
        }

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

export default Organization;
