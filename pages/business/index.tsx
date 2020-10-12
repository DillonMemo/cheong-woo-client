import React, { useEffect, useState } from "react";
import styled from "styled-components";

/** components */
import Layout from "../../components/Layout";

/** styles */
import { Image } from "../../utils/icons";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
  imageUrl: "http://placehold.it/600x400",
};

const Business: React.FC = () => {
  const [arr, setArr] = useState<any[]>([]);
  useEffect(() => {
    for (let i = 0; i < 30; i++) {
      const rand = Math.floor(Math.random() * 30);
      const url = `https://source.unsplash.com/random/960x540/?${rand}`;

      setArr((prevState) => [...prevState, { img_url: url }]);
    }
  }, []);

  useEffect(() => {
    if (arr.length > 0) {
      console.log(arr.length);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting === true) {
            const img = entry.target.querySelector(".img");
            if (!img) return;
            entry.target.classList.add("inview");
          } else {
            entry.target.classList.remove("inview");
          }
        });
      });

      const items = document.querySelectorAll(".grid-item");
      items.forEach((item) => {
        observer.observe(item);
      });
    }
  }, [arr]);
  return (
    <Layout {...attributeLayout}>
      <FirstWrapper className="title-content">
        <Title>
          <p>Home &gt; Business</p>
          <span>Business</span>
        </Title>
        <div style={{ position: "absolute", top: "47.5%", left: "47.5%" }}>
          <Image width="4rem" height="4rem" stroke="black" strokeWidth={1} />
        </div>
      </FirstWrapper>
      <div className="container">
        <GridContainer>
          {arr.map((item, index) => (
            <div key={`item-${index}`} className="grid-item">
              {/* <img src={item.img_url} /> */}
              <ImgContent className="img" img_url={item.img_url} />
            </div>
          ))}
        </GridContainer>
      </div>
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

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(270px, 1fr);
  max-width: 100rem;
  margin: 0 auto;

  .grid-row,
  .grid-item {
    display: block;
    overflow: hidden;

    img {
      -o-object-fit: cover;
      object-fit: cover;
      -o-object-position: center;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

  .grid-item {
    filter: blur(3px);
    transition: 0.6s filter cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.3s,
      0.6s -webkit-transform cubic-bezier(0.55, 0.055, 0.675, 0.19);

    &.inview {
      filter: none;
    }
  }
`;

const ImgContent = styled.div<{ img_url: string }>`
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
  height: 100%;
  transition: 0.5s ease;

  cursor: pointer;
  background-image: ${({ img_url }) => `url(${img_url})`};
  background-repeat: no-repeat;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export default Business;
