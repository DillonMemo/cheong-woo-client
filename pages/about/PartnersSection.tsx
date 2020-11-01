import React from "react";
import styled from "styled-components";

const PartnersSection: React.FC = () => {
  return (
    <ContentWrapper id="partners">
      <div className="wrapper row">
        <div className="content"></div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  margin: 2rem auto;
  overflow: hidden;
  .wrapper {
    display: flex;
    width: 100%;
    overflow: scroll;
    overscroll-behavior-x: contain;
    scrollbar-width: none;

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
      width: 100%;
      max-width: 250px;
      opacity: 0;
      background-color: #e6e6e6;
      overflow: hidden;
      transform: translateX(400px);
    }
  }
`;

export default PartnersSection;
