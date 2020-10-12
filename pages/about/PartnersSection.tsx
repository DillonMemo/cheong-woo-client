import React from "react";
import styled from "styled-components";

const PartnersSection: React.FC = () => {
  return (
    <ContentWrapper id="partners">
      <div className="wrapper row">
        <h1>Hello ~~</h1>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  .wrapper {
    max-width: 100rem;
    margin: 0 auto;
  }
`;

export default PartnersSection;
