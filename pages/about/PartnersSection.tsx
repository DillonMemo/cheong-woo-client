import React from "react";
import styled from "styled-components";
import { MessageTitle } from "../../components/Layout";

const PartnersSection: React.FC = () => {
  return (
    <ContentWrapper id="partners" style={{ padding: 0 }}>
      <div className="wrapper column">
        <div>
          <MessageTitle>관계사</MessageTitle>
        </div>
        <div className="contents">
          <div
            className="content"
            style={{
              background:
                "url('/static/relationship_company_1.jpeg') no-repeat center/contain;",
            }}></div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  margin: 2rem auto;
  overflow: hidden;
  .wrapper {
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    .contents {
      display: flex;
      max-width: 100rem;
      width: 100%;
      overflow: scroll;
      overscroll-behavior-x: contain;
      scrollbar-width: none;
      margin: 5rem auto 0;
      &::-webkit-scrollbar {
        width: 0 !important;
        display: none;
      }

      & > * + * {
        margin-left: 2rem;
      }

      &::after {
        content: "";
        display: block;
        flex: 0 0 2rem;
      }

      .content {
        flex: 1 0 auto;
        max-width: 250px;
        width: 100%;
        height: 5rem;
        opacity: 1;
        overflow: hidden;
      }
    }
  }
`;

export default PartnersSection;
