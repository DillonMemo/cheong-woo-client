import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageTitleWithUnderline } from "../../components/Layout";
import { brandColor, defaultPalette } from "../../utils/styles";

const Recruit: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="recruit">
      <div className="wrapper">
        <div className="title-container" data-aos="zoom-in-up">
          <MessageTitleWithUnderline>채용공고</MessageTitleWithUnderline>
        </div>
        <div className="container" data-aos="zoom-in-up">
          <button
            className="recruit-btn"
            onClick={() =>
              window.open(
                "http://m.jobkorea.co.kr/Recruit/GI_Read/33009006?view_type=01",
                "_blank"
              )
            }>
            체용공고 바로가기
          </button>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
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

      .recruit-btn {
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

export default Recruit;
