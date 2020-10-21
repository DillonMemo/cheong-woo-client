import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** components */
import Layout from "../../components/Layout";

/** styles */
import { Image } from "../../utils/icons";
import { defaultPalette, md } from "../../utils/styles";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
  imageUrl: "http://placehold.it/600x400",
};

const CI: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <Layout {...attributeLayout}>
      <FirstWrapper className="title-content">
        <Title>
          <p>Home &gt; Corporate Identity</p>
          <span>CI</span>
        </Title>
        <div style={{ position: "absolute", top: "47.5%", left: "47.5%" }}>
          <Image width="4rem" height="4rem" stroke="black" strokeWidth={1} />
        </div>
      </FirstWrapper>
      <ContentWrapper>
        <div className="wrapper">
          <div className="title-container" data-aos="zoom-in-up">
            <strong style={{ textAlign: "left" }}>Corporate Identity</strong>
            <small>CI</small>
          </div>
          <div className="logo_bg_grid" data-aos="zoom-in-up"></div>
          <div className="content-container" data-aos="zoom-in-up">
            <span>세로형</span>
          </div>
          <ImgWrapper data-aos="zoom-in-up">
            <div className="logo-box">
              <span>black</span>
              <div className="logo_vertical white"></div>
            </div>
            <div className="logo-box">
              <span>white</span>
              <div className="logo_vertical black"></div>
            </div>
          </ImgWrapper>

          <div className="content-container" data-aos="zoom-in-up">
            <span>가로형</span>
          </div>
          <ImgWrapper data-aos="zoom-in-up">
            <div className="logo_horisontal white" data-aos="zoom-in-up"></div>
            <div className="logo_horisontal black" data-aos="zoom-in-up"></div>
          </ImgWrapper>
        </div>
      </ContentWrapper>
    </Layout>
  );
};

const FirstWrapper = styled.div`
  /* background-image: url("https://images.unsplash.com/photo-1482148454461-aaedae4b30bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"); */
  height: 60vh;
  background-color: rgba(112, 112, 112, 1);
  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center 90%;
  background-repeat: no-repeat;
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

const ContentWrapper = styled.div`
  .wrapper {
    max-width: 100rem;
    margin: 10rem auto 5rem;

    ${md} {
      padding: 0 1.5rem;
    }

    .title-container {
      strong {
        margin-left: 1rem;
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -1px;

        ${md} {
          font-size: 1.2rem;
          font-weight: 700;
        }
      }
      small {
        margin-left: 1rem;
        font-size: 1.875rem;
        font-weight: 300;
        letter-spacing: 4px;

        ${md} {
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      &:after {
        content: "";
        display: flex;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 1);
        margin: 1rem 0 5rem;

        ${md} {
          margin-bottom: 3rem;
        }
      }
    }

    .content-container {
      margin: 5rem 0;
      span {
        margin-left: 1rem;
        font-size: 1.75rem;
        font-weight: 500;
        letter-spacing: -1px;

        ${md} {
          font-size: 1rem;
          font-weight: 700;
        }
      }

      &:after {
        content: "";
        display: flex;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 1);
        margin: 0.5rem 0 0;

        ${md} {
          margin-bottom: 3rem;
        }
      }
    }

    .logo_bg_grid {
      background: url("/static/logo/logo_bg_grid_1912.png") center no-repeat;
      width: auto;
      height: 27rem;
      margin: 0 auto;

      ${md} {
        height: 25rem;
      }
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  .logo-box {
    width: 30%;
    text-align: center;
    color: ${defaultPalette.accent2};
    letter-spacing: 2px;
  }

  .logo_vertical {
    width: 100%;
    height: 18rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;

    &.white {
      background: url("/static/logo/logo_vertical_128.png") center no-repeat;
    }
    &.black {
      background: url("/static/logo/logo_vertical_white_128.png") center
        no-repeat #252525;
    }
  }

  .logo_horisontal {
    width: 30%;
    height: 6rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 1.5rem;

    &.white {
      background: url("/static/logo/logo_horizontal_328.png") center no-repeat;
    }
    &.black {
      background: url("/static/logo/logo_horizontal_white_328.png") center
        no-repeat #252525;
    }
  }
`;

export default CI;
