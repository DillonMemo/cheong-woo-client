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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            numquam! Asperiores magnam ipsum autem error molestiae, nisi
            corporis officia expedita at dolorem facere consectetur dolorum odio
            libero eius? Maiores odio, eos mollitia voluptatem, impedit
            laboriosam, at aperiam illo maxime quos iste optio. Dolore
            blanditiis debitis labore atque iure quam rerum ea! Commodi nulla
            perspiciatis natus quo eligendi tempore possimus ducimus eaque nisi
            voluptas! Quo itaque modi dolorem, quod voluptatum inventore
            repellat voluptate sequi unde! Suscipit excepturi assumenda earum
            cumque aperiam iure, tempore labore autem? Saepe facilis animi
            tempore dolorem iusto molestiae quas, sunt magni eveniet repellendus
            architecto aperiam nobis vitae.
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
    top: 15%;
  }

  ${xl} {
    top: 15%;
  }

  ${lg} {
    top: 8%;
  }

  ${md} {
    top: 12%;
  }

  ${sm} {
    display: none;
  }
`;

export default GreetingsSection;
