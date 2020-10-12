import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageContent, MessageTitle } from "../../components/Layout";
import { md } from "../../utils/styles";

const InformationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <ContentWrapper id="information">
      <div className="wrapper mobile-reverse-row">
        <div className="text-container" data-aos="fade-right">
          <MessageTitle>청우종합건설</MessageTitle>
          <MessageContent className="content">
            저희 회사는 건설시행과 건설시공을 병행하고 있는 종합건설업체로서
            맡겨진 일에 책임과 최선을 다하며, 품질제일 위주로 건설산업 발전에
            임하고 있습니다. 동종업계의 최고를 목표로 전직원이 하나가 되어 항상
            연구하고 개발 하며 더 나은 품질과 고객만족을 위하여 새로운 공법을
            개발하고자 노력하고 있습니다. 또한, 과감한 도전정신과 창의력으로
            최고의 부동산 종합건설회사가 되기 위해 쉬지 않고 정진 하겠으며
            변화하는 라이프스타일을 반영한 최적의 공간을 창조하고, 나 혼자가
            아닌 우리 모두를 위한 환경 친화 적이고, 인간 중심적인 건축문화 축에
            앞장서서 항상 미소와 여유로움 속에서 성실한 습으로 건설업계의 발전에
            기여 한다는 사명감으로 매 진하여 우리나라 건설업계에 하나의 ”획“으로
            ‘청우종합건설’을 자리 매김 하겠습니다.
          </MessageContent>
        </div>
        <div className="image-container" data-aos="fade-left">
          <div className="image-group">
            <img
              src="/static/information_company.jpeg"
              alt="information company"
            />
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  .wrapper {
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
        }
      }
    }
  }
`;

export default InformationSection;
