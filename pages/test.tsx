import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

/** components */
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";
import LoaderSpinner from "../components/LoaderSpinner";

/** interfaces */
import { SayHelloData, SayHelloVars } from "../interfaces";
import { brandColor } from "../utils/styles";

/** utils */
import { imgs, ImgType } from "../utils/business-data";

const [title] = ["청우종합건설"];

const SAY_HELLO_QUERY = gql`
  query GetSayHello($name: String!) {
    sayHello(name: $name) {
      text
      error
    }
  }
`;

const Test: React.FC = () => {
  const [filters, setFilters] = useState<{ name: string; status: boolean }[]>([
    { name: "all", status: true },
    { name: "lion", status: false },
    { name: "horse", status: false },
    { name: "tiger", status: false },
    { name: "elephant", status: false },
    { name: "rhino", status: false },
  ]);
  const [images, setImages] = useState(imgs);
  const { loading, data } = useQuery<SayHelloData, SayHelloVars>(
    SAY_HELLO_QUERY,
    {
      variables: { name: "Good Dillon!!!" },
    }
  );

  const handleFilterClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    const { index } = e.currentTarget.dataset;
    if (!index) return;

    // 'All' event
    if (+index === 0) {
      const result = filters.map((filter) =>
        filter.name === "all"
          ? { ...filter, status: true }
          : { ...filter, status: false }
      );
      setFilters(result);
      setImages(imgs);
    } else {
      const result = [
        { ...filters[0], status: false },
        ...filters.slice(1, +index),
        { ...filters[+index], status: !filters[+index].status },
        ...filters.slice(+index + 1),
      ];
      const newImages: ImgType[] = [];

      // var solution=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1))

      const filterArr = result.filter((r) => r.status).map((r) => r.name);
      imgs.filter((img) => {
        filterArr.map((filter) => filter === img.tag && newImages.push(img));
      });
      console.log(newImages);
      setFilters(result);
      setImages(newImages);
    }
  };

  useEffect(() => {
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
  }, [images]);

  return (
    <Layout title={title}>
      <Wrapper>
        <h2>청우종합건설</h2>
        <img src="/static/logo/logo_256.png" />
        <div style={{ marginTop: "1rem" }}>
          <p>Test from default background style</p>
          <Skeleton width={400} height={400} />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <p>서버 & 클라이언트 연동 테스트</p>
          {!loading ? (
            <h2>{data && data.sayHello.text}</h2>
          ) : (
            <Skeleton width="100%" height={64} />
          )}
        </div>
        <LoaderSpinner />
      </Wrapper>
      <FilterContainer>
        <h2>Gallery</h2>

        <ul className="filter-list">
          {filters.map((filter, index) => (
            <li
              key={`filter-${index}`}
              data-index={index}
              onClick={handleFilterClick}
              className={`filter ${filter.status && "active"}`}>
              {filter.name}
              {/* <input type="checkbox" checked={filter.status} />
              <label htmlFor={filter.name}>{filter.name}</label> */}
            </li>
          ))}
        </ul>
      </FilterContainer>
      <div className="container">
        {/* <GridContainer>
          {arr.map((item, index) => (
            <div key={`item-${index}`} className="grid-item">
              <ImgContent className="img" img_url={item.img_url} />
            </div>
          ))}
        </GridContainer> */}

        <GridContainer className="grid">
          {images.map((img, index) => (
            <div key={`item-${index}`} className="grid-item">
              <ImgContent className="img" img_url={img.url} />
            </div>
          ))}
        </GridContainer>
      </div>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 110vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FilterContainer = styled.div`
  text-align: center;

  h2 {
    margin: 0 0 20px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .filter {
      position: relative;
      transition: 0.4s ease-out;
      color: #d3d3d3;
      padding: 0.5rem 0.8rem;
      line-height: 2rem;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;

      input {
        display: none;
      }

      label {
        cursor: pointer;
      }

      &:after {
        content: "";
        width: 0;
        position: absolute;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        top: 100%;
        background-color: black;
        transition: width 0.4s ease;
      }

      &:hover,
      &.active {
        color: ${brandColor.normal};

        &:after {
          width: 100%;
          left: 0;
          background-color: ${brandColor.normal};
        }
      }
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  grid-auto-rows: minmax(470px, 1fr);
  max-width: 100rem;
  margin: 1rem auto;

  .grid-row,
  .grid-item {
    display: block;
    overflow: hidden;
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
  /* -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center; */
  width: 100%;
  height: 100%;
  transition: 0.5s ease;

  cursor: pointer;
  background-image: ${({ img_url }) => `url(${img_url})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export default Test;
