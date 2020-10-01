import React, { useCallback, useEffect } from "react";
import styled from "styled-components";

/** utils */
import { ArrowLeft, ArrowRight } from "../utils/icons";
import { md } from "../utils/styles";

const ImageSlider: React.FC = () => {
  const autoSlide = true;
  const intervalTime = 5000;
  //   const [autoSlide, setAutoSlide] = useState<boolean>(true);
  //   const [intervalTime, setIntervalTime] = useState<number>(5000);
  let slideInterval: any = null;

  useEffect(() => {
    if (autoSlide) {
      // Run next slide at interval time
      slideInterval = setInterval(nextSlide, intervalTime);

      return () => clearInterval(slideInterval);
    }
  }, []);

  const nextSlide = (): void => {
    const current = document.querySelector(".current");
    const slides = document.querySelectorAll(".slide");

    const active = document.querySelector(".active");
    const dots = document.querySelectorAll(".dot");

    if (!current || !active) return;
    // Remove current class
    current.classList.remove("current");
    // Remove active class
    active.classList.remove("active");
    // Check for next slide
    if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add("current");
    } else {
      // Add current to start
      slides[0].classList.add("current");
    }

    // Check for next dot
    if (active.nextElementSibling) {
      // Add active to next sibling
      active.nextElementSibling.classList.add("active");
    } else {
      // Add active to start
      dots[0].classList.add("active");
    }

    setTimeout(() => {
      current.classList.remove("current");
      active.classList.remove("active");
    });
  };

  const prevSlide = (): void => {
    const current = document.querySelector(".current");
    const slides = document.querySelectorAll(".slide");

    const active = document.querySelector(".active");
    const dots = document.querySelectorAll(".dot");
    if (!current || !active) return;
    // Remove current class
    current.classList.remove("current");
    // Remove active class
    active.classList.remove("active");
    // Check for prev slide
    if (current.previousElementSibling) {
      // Add current to prev sibling
      current.previousElementSibling.classList.add("current");
    } else {
      // Add current to start
      slides[slides.length - 1].classList.add("current");
    }

    // Check for next dot
    if (active.previousElementSibling) {
      // Add active to next sibling
      active.previousElementSibling.classList.add("active");
    } else {
      // Add active to start
      dots[dots.length - 1].classList.add("active");
    }

    setTimeout(() => {
      current.classList.remove("current");
      active.classList.remove("active");
    });
  };

  const handleNextSlide = useCallback((): void => {
    nextSlide();

    if (!slideInterval) return;
    if (autoSlide) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }, []);

  const handlePrevSlide = useCallback((): void => {
    prevSlide();

    if (!slideInterval) return;
    if (autoSlide) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }, []);

  const handleDotClick = useCallback(
    ({ target }: React.MouseEvent<HTMLDivElement>): void => {
      const current = document.querySelector(".current");
      const slides = document.querySelectorAll(".slide");

      const active = document.querySelector(".active");
      const dots = document.querySelectorAll(".dot");

      const index = +(target as any).dataset.index;

      if (!current || !active) return;

      if (!current || !active) return;
      // Remove current class
      current.classList.remove("current");
      // Remove active class
      active.classList.remove("active");

      slides[index - 1].classList.add("current");
      dots[index - 1].classList.add("active");

      if (!slideInterval) return;
      if (autoSlide) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
      }
    },
    []
  );

  return (
    <>
      <Wrapper>
        <div className="slide current">
          <div className="content">
            <h1>Title One</h1>
            <small>건축</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aut
              quam, autem quis corrupti et laboriosam voluptatibus! Ducimus,
              perspiciatis temporibus!
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Title Two</h1>
            <small>토목</small>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eos
              distinctio illo, ducimus a maxime eligendi odit ipsa quo
              dignissimos.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="content">
            <h1>Title Three</h1>
            <small>주택</small>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi est,
              necessitatibus omnis unde dolore tempora similique! Ipsam eum quo
              laboriosam?
            </p>
          </div>
        </div>
      </Wrapper>
      <SlideButtonWrapper>
        <button id="prev" onClick={handlePrevSlide}>
          <ArrowLeft />
        </button>
        <button id="next" onClick={handleNextSlide}>
          <ArrowRight />
        </button>
      </SlideButtonWrapper>
      <SlideDotWrapper>
        <div
          className="dot active"
          data-index={1}
          onClick={handleDotClick}></div>
        <div className="dot" data-index={2} onClick={handleDotClick}></div>
        <div className="dot" data-index={3} onClick={handleDotClick}></div>
      </SlideDotWrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  .slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.4s ease-in-out;

    .content {
      position: absolute;
      bottom: 150px;
      left: -600px;
      opacity: 0;
      width: 37.5rem;
      background-color: rgba(255, 255, 255, 0.8);
      color: #333;
      padding: 2.5rem;

      ${md} {
        bottom: -300px;
        left: 0;
        width: 100%;

        padding-bottom: 3.5rem;
      }

      h1 {
        margin-bottom: 0.625rem;
        ${md} {
          font-size: 1.5rem;
        }
      }

      p {
        ${md} {
          font-size: 0.8rem;
        }
      }
    }

    &.current {
      opacity: 1;

      .content {
        opacity: 1;
        transform: translateX(600px);
        transition: 0.7s ease-in-out 0.3s;

        ${md} {
          transform: translateY(-300px);
        }
      }
    }

    &:nth-of-type(1) {
      background: url("../static/main_1.jpeg") no-repeat center center/cover;
    }
    &:nth-of-type(2) {
      background: url("../static/main_2.jpeg") no-repeat center center/cover;
    }
    &:nth-of-type(3) {
      background: url("../static/main_3.jpeg") no-repeat center center/cover;
    }
  }
`;

const SlideButtonWrapper = styled.div`
  button {
    border: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    cursor: pointer;
    padding: 0.75rem 1rem;
    border-radius: 50%;
    outline: none;
    transition: all 0.4s ease-out;

    ${md} {
      border-color: #000;
      color: #000;
    }

    ${md} {
      padding: 0.5rem 0.75rem;
    }

    svg {
      position: relative;
      top: 1px;
      g {
        stroke: #fff;

        ${md} {
          stroke: #000;
        }
      }
    }

    &#next {
      position: absolute;
      top: 50%;
      right: 2rem;

      ${md} {
        right: 1rem;
      }
    }
    &#prev {
      position: absolute;
      top: 50%;
      left: 2rem;

      ${md} {
        left: 1rem;
      }
    }
    &:hover {
      background-color: #fff;

      svg {
        g {
          stroke: #333;
        }
      }
    }
  }
`;

const SlideDotWrapper = styled.div`
  div {
    width: 1rem;
    height: 1rem;
    position: absolute;
    bottom: 2rem;
    left: 50%;
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;

    ${md} {
      border-color: #000;
      bottom: 1rem;
    }

    &:nth-of-type(1) {
      left: 45%;
      ${md} {
        left: 40%;
      }
    }

    &:nth-of-type(2) {
      left: 47.5%;
      ${md} {
        left: 50%;
      }
    }

    &:nth-of-type(3) {
      left: 50%;
      ${md} {
        left: 60%;
      }
    }

    &.active {
      background-color: #fff;

      ${md} {
        background-color: #000;
      }
    }
  }
`;

export default ImageSlider;
