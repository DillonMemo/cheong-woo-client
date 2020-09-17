import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";

/** styles */
import { brandColor } from "../utils/styles";
import { ArrowDown } from "../utils/icons";

/** interface */
import { HeaderProps, HeaderWrapperProps } from "../interfaces";

const Header: React.FC<HeaderProps> = ({ router }) => {
  const header = useRef<HTMLElement>(null);
  const handler = useCallback(() => {
    if (!header.current) return;
    const scrollPos = window.scrollY;

    if (scrollPos > 10) {
      header.current.classList.add("scrolled");
    } else {
      header.current.classList.remove("scrolled");
    }
  }, []);

  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <HeaderWrapper ref={header} router={router}>
        <div className="container">
          <div className="logo-container">
            <div className="logo">
              <span>청우종합건설</span>
            </div>
          </div>
          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <a href="#">Home</a>
                </li>
                <li className="nav-link">
                  <a href="#">
                    About
                    <ArrowDown stroke="black" />
                  </a>
                </li>
                <li className="nav-link">
                  <a href="#">Business</a>
                </li>
                <li className="nav-link">
                  <a href="#">Projects</a>
                </li>
                <li className="nav-link">
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            {/* <div className="log-sign">
              <a href="#" className="btn transparent">
                Log in
              </a>
              <a href="#" className="btn solid">
                Sign up
              </a>
            </div> */}
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
};

const headerHeight = "4rem";

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  color: #000;
  z-index: 2;
  width: 100vw;
  padding: 0 10vw;
  transition: 0.4s ease-out;

  .container {
    max-width: 80rem;
    padding: 0 2rem;
    height: ${headerHeight};
    margin: 0 auto;
    display: flex;
    transition: 0.4s ease-out;

    .logo-container {
      flex: 1;
      display: flex;
      align-items: center;
      .logo {
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: ${headerHeight};
      }
    }

    .nav-btn {
      flex: 3;
      display: flex;

      .nav-links {
        flex: 2;

        ul {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;

          .nav-link {
            a {
              line-height: ${headerHeight};
              color: #000;
              transition: 0.4s ease-out;
            }
          }
        }
      }

      .log-sign {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .btn {
          display: inline-block;
          padding: 0.5rem 1.3rem;
          font-size: 0.8rem;
          border: 2px solid ${brandColor.normal};
          border-radius: 2rem;
          line-height: 1;
          margin: 0 0.2rem;
          transition: 0.3s;
          text-transform: uppercase;

          &.solid,
          &.transparent:hover {
            background-color: ${brandColor.normal};
            color: #fff;
          }
          &.transparent,
          &.solid:hover {
            background-color: #fff;
            color: ${brandColor.normal};
          }
        }
      }
    }
  }

  &.scrolled {
    background-color: rgba(255, 255, 255, 0.85);
    color: #000;

    .container {
      height: calc(${headerHeight} + 1rem);

      .nav-btn {
        .nav-links {
          ul {
            .nav-link {
              a {
                line-height: calc(${headerHeight} + 1rem);
              }
            }
          }
        }
      }
    }
  }
`;

export default Header;
