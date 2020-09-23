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

    if (!current) return;
    // Remove current class
    current.classList.remove("current");
    // Check for next slide
    if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add("current");
    } else {
      // Add current to start
      slides[0].classList.add("current");
    }

    setTimeout(() => current.classList.remove("current"));
  };

  const prevSlide = (): void => {
    const current = document.querySelector(".current");
    const slides = document.querySelectorAll(".slide");
    if (!current) return;
    // Remove current class
    current.classList.remove("current");
    // Check for prev slide
    if (current.previousElementSibling) {
      // Add current to prev sibling
      current.previousElementSibling.classList.add("current");
    } else {
      // Add current to start
      slides[slides.length - 1].classList.add("current");
    }

    setTimeout(() => current.classList.remove("current"));
  };

  const handleNextSlide = useCallback((): void => {
    nextSlide();

    debugger;
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

  return (
    <>
      <Wrapper>
        <div className="slide current">
          <div className="content">
            <h1>Title One</h1>
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
      bottom: 200px;
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
      }

      h1 {
        margin-bottom: 0.625rem;
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
      background: url("https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")
        no-repeat center center/cover;
    }
    &:nth-of-type(2) {
      background: url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")
        no-repeat center center/cover;
    }
    &:nth-of-type(3) {
      background: url("https://images.unsplash.com/photo-1525351549016-1ddd272c8315?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")
        no-repeat center center/cover;
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
      padding: 0.5rem 0.75rem;
    }

    svg {
      g {
        stroke: #fff;
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

export default ImageSlider;
