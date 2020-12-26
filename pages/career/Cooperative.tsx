import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { brandColor, defaultPalette } from "../../utils/styles";

const Cooperative: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="cooperative">
      <div className="wrapper">
        <div className="title-container" data-aos="zoom-in-up">
          <MessageTitleWithUnderline>협력사</MessageTitleWithUnderline>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <button
            className="cooperative-btn"
            onClick={() =>
              window.open(
                "http://www.cak.or.kr/comm/commsub01View.do?menuId=138&dataId=30360",
                "_blank"
              )
            }>
            협력사 지원 바로가기
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  background-color: #f8f8f9;
  .wrapper {
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;
    display: flex;
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

      .cooperative-btn {
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 1.25rem;
        padding: 1.5rem 2rem;

        color: white;
        background-color: ${brandColor.light};
        transition: background-color 0.3s ease;

        &:hover {
          background-color: ${brandColor.normal};
        }
      }
    }
  }
`;

export default Cooperative;
