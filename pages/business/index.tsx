import React, { useEffect, useState } from "react";
import styled from "styled-components";

/** components */
import Layout from "../../components/Layout";

/** utils */
import { FilterType, imgs, ImgType } from "../../utils/sample-data";
import { brandColor, xs } from "../../utils/styles";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
  imageUrl: "http://placehold.it/600x400",
};

const Business: React.FC = () => {
  const [filters, setFilters] = useState<FilterType[]>([
    { name: "all", status: true },
    { name: "filter 1", status: false },
    { name: "filter 2", status: false },
    { name: "filter 3", status: false },
    { name: "filter 4", status: false },
    { name: "filter 5", status: false },
  ]);
  const [images, setImages] = useState<ImgType[]>(imgs);

  /**
   * @description filter list click event handler
   * @param e - event argument
   */
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

      if (result.filter((r) => r.status).length > 0) {
        const filterArr = result.filter((r) => r.status).map((r) => r.name);
        imgs.filter((img) => {
          filterArr.map((filter) => filter === img.tag && newImages.push(img));
        });

        setFilters(result);
        setImages(newImages);
      } else {
        const result = filters.map((filter) =>
          filter.name === "all"
            ? { ...filter, status: true }
            : { ...filter, status: false }
        );
        setFilters(result);
        setImages(imgs);
      }
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
    <Layout {...attributeLayout}>
      <Wrapper>
        <FilterContainer>
          <h1>Business</h1>

          <ul className="filter-list">
            {filters.map((filter, index) => (
              <li
                key={`filter-${index}`}
                data-index={index}
                onClick={handleFilterClick}
                className={`filter ${filter.status ? "active" : ""}`}>
                {filter.name}
              </li>
            ))}
          </ul>
        </FilterContainer>
      </Wrapper>
      <GridContainer className="grid">
        {images.map((img, index) => (
          <div key={`item-${index}`} className="grid-item">
            <ImgContent className="img" img_url={img.url} />
            <div className="details">
              <span>{img.title}</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores quia maiores fugiat eaque! Laborum, aliquam quaerat.
                Similique magni pariatur dolorum!
              </p>
            </div>
          </div>
        ))}
      </GridContainer>
    </Layout>
  );
};

const Wrapper = styled.div`
  max-width: 100rem;
  margin: 10rem auto 0;
  display: flex;
  justify-content: center;
`;

const FilterContainer = styled.div`
  text-align: center;

  h1 {
    margin: 0 0 20px;
    text-transform: uppercase;

    ${xs} {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    .filter {
      position: relative;
      transition: 0.4s ease-out;
      color: #c8c8c8;
      padding: 0.5rem 0.8rem;
      line-height: 2rem;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;

      ${xs} {
        font-size: 0.7rem;
        padding: 0.25rem 0.3rem;
        line-height: 1rem;
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

      /* &:hover, */
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
  margin: 1rem auto 5rem;

  ${xs} {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    grid-auto-rows: minmax(300px, 1fr);
  }

  .grid-row,
  .grid-item {
    display: block;
    overflow: hidden;
  }

  .grid-item {
    position: relative;
    filter: blur(3px);
    transition: 0.6s filter cubic-bezier(0.55, 0.055, 0.675, 0.19) 0.3s,
      0.6s -webkit-transform cubic-bezier(0.55, 0.055, 0.675, 0.19);

    .details {
      position: absolute;
      top: 50%;
      left: 10%;
      width: 80%;
      height: 80%;
      content: "";
      padding: 5% 8%;
      display: flex;
      flex-flow: column wrap;
      justify-content: space-around;
      /* transform: translate(-50%, -50%) rotateY(90deg); */
      transform: translateY(50%);
      transform-origin: 50%;
      background: rgba(255, 255, 255, 0.9);
      opacity: 0;
      transition: all 0.7s ease-in;

      ${xs} {
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    &.inview {
      filter: none;
    }

    &:hover {
      .details {
        /* transform: translate(-50%, -50%) rotateY(0deg); */
        transform: translateY(-50%);
        opacity: 1;
      }
    }
  }
`;

const ImgContent = styled.div<{ img_url: string }>`
  width: 100%;
  height: 100%;
  transition: 0.3s ease;

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

export default Business;
