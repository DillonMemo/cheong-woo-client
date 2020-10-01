import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

/** styles */
import { MessageContent, MessageTitle } from "../../components/Layout";
import { Image } from "../../utils/icons";

const InformationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <ContentWrapper id="information" className="row">
      <div className="text-container" data-aos="fade-right">
        <MessageTitle>청우종합건설</MessageTitle>
        <MessageContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          recusandae, at, labore velit eligendi amet nobis repellat natus sequi
          sint consectetur excepturi doloribus vero provident consequuntur
          accusamus quisquam nesciunt cupiditate soluta alias illo et deleniti
          voluptates facilis repudiandae similique dolore quaerat architecto
          perspiciatis officiis dolor ullam expedita suscipit neque minima rem
          praesentium inventore ab officia quos dignissimos esse quam placeat
          iste porro eius! Minus, aspernatur nesciunt consectetur. Sit, eius,
          itaque, porro, beatae impedit officia tenetur reiciendis autem vitae a
          quae ipsam repudiandae odio dolorum quaerat asperiores possimus
          corporis optio animi quisquam laboriosam nihil quam voluptatum quidem
          veritatis iste culpa iure modi perspiciatis recusandae ipsa libero
          officiis aliquam doloremque similique id quasi atque distinctio enim
          sapiente ratione in quia eum perferendis earum blanditiis. Nobis,
          architecto, veniam molestias minus iste necessitatibus est ab in earum
          ratione eveniet soluta molestiae sed illo nostrum nemo debitis. Minus,
          quod totam aliquam ea asperiores fugit quaerat excepturi dolores
          ratione numquam consequatur id unde alias provident vero incidunt
          exercitationem similique consequuntur hic possimus? Fuga, eveniet
          quaerat inventore corporis laborum eligendi enim soluta obcaecati
          aliquid veritatis provident amet laudantium est quisquam dolore
          exercitationem modi? Distinctio, pariatur, ab velit praesentium vitae
          quidem consequatur deleniti recusandae odit officiis. Quidem,
          cupiditate.
        </MessageContent>
      </div>
      <div
        className="image-container"
        data-aos="fade-left"
        style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: "50%", left: "47.5%" }}>
          <Image width="4rem" height="4rem" stroke="black" strokeWidth={1} />
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  .text-container {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }
  .image-container {
    background-color: rgba(224, 224, 224, 1);
    flex: 1;
  }
`;

export default InformationSection;
