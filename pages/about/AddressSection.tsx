import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { md } from "../../utils/styles";
/** components */
import { MessageSubTitle, MessageTitle } from "../../components/Layout";

const AddressSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <ContentWrapper id="address">
      <div className="wrapper column" data-aos="fade-down">
        <div className="title">
          <MessageTitle>회사 위치</MessageTitle>
        </div>
        <div className="container row">
          <div>
            <MessageSubTitle>본사</MessageSubTitle>
            <StyledIframe
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=%EA%B2%BD%EA%B8%B0%EB%8F%84%20%EA%B4%91%EC%A3%BC%EC%8B%9C%20%EC%A4%91%EC%95%99%EB%A1%9C187%EB%B2%88%EA%B8%B8%2021%2C%201%EC%B8%B5%202%ED%98%B8(%EC%86%A1%EC%A0%95%EB%8F%99)&key=${
                process.env.GOOGLE_API_KEY ||
                "AIzaSyBupho10ZR1JkUEhkrxZEnka5SMAUO4Dt0"
              }`}
              aria-label="경기도 광주시 중앙로187번길 21, 1층 2호(송정동)"
              allowFullScreen
            />
          </div>
          <div>
            <MessageSubTitle>서울지사</MessageSubTitle>
            <StyledIframe
              frameBorder="0"
              src={`https://www.google.com/maps/embed/v1/place?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EC%86%A1%ED%8C%8C%EA%B5%AC%20%EA%B1%B0%EC%97%AC%EB%8F%99%2021-11%2C%207%EC%B8%B5&key=${
                process.env.GOOGLE_API_KEY ||
                "AIzaSyBupho10ZR1JkUEhkrxZEnka5SMAUO4Dt0"
              }`}
              aria-label="서울시 송파구 거여동 21-11, 7층"
              allowFullScreen
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
    width: 100%;
    max-width: 100rem;
    margin: 0 auto;

    .container {
      display: flex;
      width: 100%;

      > div {
        flex: 1;
        display: flex;
        flex-flow: column wrap;
        padding: 0 2rem;

        ${md} {
          padding: 0;
        }
      }
    }
  }
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 30vh;
  border-radius: 0.5rem;
  margin: 1rem 0;
`;

export default AddressSection;
