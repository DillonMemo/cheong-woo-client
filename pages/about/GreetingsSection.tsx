import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageContent, MessageTitle } from "../../components/Layout";
import { lg, md, sm, xl, xxl } from "../../utils/styles";

const GreetingsSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <ContentWrapper id="greetings">
      <div className="wrapper row">
        <div className="image-container" data-aos="fade-left">
          <div className="image-group">
            <img src="/static/ceo_img.jpeg" alt="ceo" />
          </div>
        </div>
        <div className="text-container" data-aos="fade-right">
          <MessageTitle>CEO 인사말</MessageTitle>
          <MessageContent className="content">
            <Doublequotation>&ldquo;</Doublequotation>
            안녕하십니까 청우종합건설 대표이사 입니다. <br /> 1999년 7월에
            설립된 청우종합건설(주)는 고객만족과 품질관리를 기본으로 고객의
            신뢰를 받는 기업으로서 지속 가능한 성장을 추구하고 있으며, 최고의
            품질과 최선의 안전관리를 자부하고 있습니다. <br /> 아름다운 디자인은
            물론 실생활에 필요한 기능적인 면과 안전에 관련된 부분에 대하여
            최선의 노력을 기울이고 있습니다. <br /> 오랜기간 이끌어온만큼 더욱
            신뢰있는 기업으로 탈바꿈해 나가겠습니다. <br /> <br />
            청우종합건설 대표이사 배상
          </MessageContent>
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
    .text-container {
      padding: 2rem 0;
      flex: 1.5;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column wrap;

      .content {
        padding: 0 12rem;

        ${md} {
          padding: 0;
        }
      }
    }
    .image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      .image-group {
        background-color: rgba(224, 224, 224, 1);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          min-height: 30rem;

          ${md} {
            min-height: 100%;
          }
        }
      }
    }
  }
`;

const Doublequotation = styled.span`
  font-size: 5rem;
  position: absolute;
  top: 25%;
  left: 20%;

  ${xxl} {
    top: 23%;
  }

  ${xl} {
    top: 17%;
  }

  ${lg} {
    top: 8%;
  }

  ${md} {
    top: 20%;
  }

  ${sm} {
    display: none;
  }
`;

export default GreetingsSection;
