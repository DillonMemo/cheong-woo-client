import React, { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import styled from "styled-components";

/** styles */
import { brandColor, defaultPalette, lg, md } from "../utils/styles";
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
          <input type="checkbox" name="" id="check" />
          <div className="logo-container">
            <Link href="/">
              <a>
                <div className="logo">
                  <img
                    src="/static/logo/logo_128.png"
                    width="64px"
                    height="32px"
                    style={{ marginRight: "1rem" }}
                  />
                  <span>청우종합건설</span>
                </div>
              </a>
            </Link>
          </div>
          <div className="nav-btn">
            <div className="nav-links">
              <ul>
                <li className="nav-link">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className="nav-link">
                  <Link href="#">
                    <a>
                      Company
                      <ArrowDown stroke="black" />
                    </a>
                  </Link>
                  <div className="dropdown">
                    <ul>
                      <li className="dropdown-link">
                        <Link href="/corporateidentity">
                          <a>C I</a>
                        </Link>
                      </li>
                      <li className="dropdown-link">
                        <Link href="#">
                          <a>
                            About
                            <ArrowDown stroke="black" />
                          </a>
                        </Link>
                        <div className="dropdown second">
                          <ul>
                            <li className="dropdown-link">
                              <Link href="/about#information">
                                <a>기업정보</a>
                              </Link>
                            </li>
                            <li className="dropdown-link">
                              <Link href="/about#greetings">
                                <a>CEO 인사말</a>
                              </Link>
                            </li>
                            <li className="dropdown-link">
                              <Link href="/about#history">
                                <a>연혁</a>
                              </Link>
                            </li>
                            <li className="dropdown-link">
                              <Link href="/about#address">
                                <a>회사위치</a>
                              </Link>
                            </li>
                            <li className="dropdown-link">
                              <Link href="/about#partners">
                                <a>협력사 현황</a>
                              </Link>
                            </li>
                            <div className="arrow"></div>
                          </ul>
                        </div>
                      </li>
                      <div className="arrow"></div>
                    </ul>
                  </div>
                </li>
                <li className="nav-link">
                  <Link href="/business">
                    <a>Business</a>
                  </Link>
                </li>
                {/* <li className="nav-link">
                  <Link href="#">
                    <a>Projects</a>
                  </Link>
                </li> */}
                <li className="nav-link">
                  <Link href="#">
                    <a>Career</a>
                  </Link>
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
          <Hamburger className="hamburger-menu-container">
            <div className="hamburger-menu">
              <div></div>
            </div>
          </Hamburger>
        </div>
      </HeaderWrapper>
    </>
  );
};

const headerHeight = "4rem";
const hamburgerSize = "2.5rem";

const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  color: #000;
  z-index: 2;
  width: 100vw;
  /* padding: 0 10vw; */
  transition: 0.4s ease-out;
  border-top: 5px solid #0172b2;
  ${md} {
    background-color: #fff;
    padding: 0 1rem;
  }

  .container {
    position: relative;
    max-width: 100rem;
    padding: 0 2rem;
    height: ${headerHeight};
    margin: 0 auto;
    display: flex;
    transition: 0.4s ease-out;

    ${md} {
      padding: 0;
    }

    .logo-container {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: end;

      ${md} {
        flex: 2;
      }
      .logo {
        color: #000;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: 2px;
        text-transform: uppercase;
        line-height: ${headerHeight};
        display: flex;
        align-items: center;

        ${lg} {
          font-size: 1rem;
        }
      }
    }

    .nav-btn {
      flex: 3;
      display: flex;

      ${md} {
        position: fixed;
        height: calc(100vh - ${headerHeight});
        top: ${headerHeight};
        left: 0;
        width: 100%;
        background-color: ${brandColor.normal};
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow-x: hidden;
        overflow-y: auto;
        transform: translateX(100%);
        transition: 0.65s;
      }

      .nav-links {
        flex: 2;
        display: flex;
        justify-content: flex-end;

        ${md} {
          flex: initial;
          justify-content: center;
          width: 100%;
        }

        > ul {
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;

          ${md} {
            width: 100%;
            flex-direction: column;
          }

          .nav-link {
            position: relative;
            transition: 0.4s ease-out;

            ${md} {
              width: 100%;
              opacity: 0;
              transform: translateY(15px);

              &:hover {
                .arrow {
                  background-color: ${brandColor.lighter};
                }

                > a > svg {
                  transform: rotate(360deg);
                }
              }
            }

            > a {
              position: relative;
              color: #000;
              padding: 0.5em 0.8rem;
              line-height: 2rem;
              font-size: 0.95rem;
              letter-spacing: 1px;

              ${md} {
                color: #fff;
                line-height: 1;
                padding: 1.6rem 2rem;
                display: flex;
                justify-content: space-between;
              }

              > svg {
                transform: rotate(0deg);
                transition: 0.7s ease-out;
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

              &:hover {
                color: ${brandColor.normal};

                ${md} {
                  color: #fff;
                  background-color: ${brandColor.lighter};
                }

                &:after {
                  width: 100%;
                  left: 0;
                  background-color: ${brandColor.normal};

                  ${md} {
                    width: 0;
                    left: 0;
                    background-color: none;
                  }
                }
              }
            }

            svg {
              position: relative;
              top: 3px;
              margin-left: 0.2rem;

              g {
                ${md} {
                  stroke: #fff;
                }
              }
            }
          }
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          padding-top: 10px;
          width: 10rem;
          transform: translateY(0);
          opacity: 0;
          pointer-events: none;
          /* pointer-events: auto; */
          transition: 0.4s ease-out;

          .dropdown-link {
            position: relative;

            > a {
              display: flex;
              align-items: center;
              justify-content: space-between;
              background-color: #fff;
              color: #000;
              padding: 0.5rem 1rem;
              font-size: 0.9rem;
              transition: 0.4s ease-out;

              ${md} {
                background-color: transparent;
                color: #fff;
                padding: 1.2rem 2rem;
                line-height: 1;
              }
            }

            &:not(:nth-last-child(2)) {
              border-bottom: 1px solid ${defaultPalette.accent1};

              ${md} {
                border-bottom: none;
              }
            }

            &:hover {
              > a {
                background-color: ${defaultPalette.accent1};
                color: ${brandColor.normal};

                svg {
                  ${md} {
                    transform: rotate(360deg);
                    g {
                      stroke: ${brandColor.normal};
                    }
                  }
                }
              }

              &:first-child ~ .arrow {
                background-color: ${defaultPalette.accent1};
              }

              &:not(:first-child) ~ .arrow {
                ${md} {
                  background-color: ${brandColor.light};
                }
              }
            }
          }

          .dropdown-link svg {
            transform: rotate(-90deg);

            ${md} {
              transition: 0.7s ease-out;
            }
          }

          .arrow {
            position: absolute;
            width: 11px;
            height: 11px;
            top: 5.5px;
            left: 32px;
            background-color: #fff;
            transform: rotate(45deg);
            z-index: -1;
            cursor: pointer;
            transition: 0.3s ease-out;
            ${md} {
              top: 61.5px;
              z-index: 1;
              background-color: ${brandColor.light};
              transform: scale(1.1) rotate(45deg);
              transition: 0.4s ease-out;
            }
          }

          &.second {
            top: 0;
            left: 100%;
            padding-top: 0;
            padding-left: 0.8rem;
            cursor: pointer;
            transform: translateX(10px);

            .dropdown-link {
              > a {
                ${md} {
                  padding: 1.2rem 2rem 1.2rem 3rem;
                }
              }
            }

            .dropdown.second {
              .dropdown-link > a {
                ${md} {
                  padding: 1.2rem 2rem 1.2rem 4rem;
                }
              }
            }

            .arrow {
              top: 10px;
              left: 7.5px;

              ${md} {
                display: none;
              }
            }
          }
        }

        .dropdown,
        .dropdown.second {
          ${md} {
            position: initial;
            top: initial;
            left: initial;
            transform: initial;
            opacity: 1;
            pointer-events: auto;
            width: 100%;
            padding: 0;
            background-color: ${brandColor.light};
            display: none;
          }
        }

        .nav-link:hover > .dropdown {
          transform: translate(0, 10px);

          ${md} {
            transform: none;
          }
        }

        .dropdown-link:hover > .dropdown {
          transform: translate(0, 0);
        }
        .nav-link:hover > .dropdown,
        .dropdown-link:hover > .dropdown {
          opacity: 1;
          pointer-events: auto;

          ${md} {
            display: block;
          }
        }
      }

      .log-sign {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        ${md} {
          flex: initial;
          width: 100%;
          padding: 1.5rem 1.9rem;
          justify-content: flex-start;
          opacity: 0;
          transform: translateY(15px);
        }

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

          ${md} {
            border-color: #fff;
          }

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
  /* 스크롤 모드 */
  &.scrolled {
    background-color: rgba(255, 255, 255);
    color: #000;

    .container {
      height: calc(${headerHeight} + 1rem);

      .nav-btn {
        ${md} {
          height: calc(100vh - calc(${headerHeight} + 1rem));
          top: calc(${headerHeight} + 1rem);
          transition: 0.4s ease-out;
        }
        .nav-links {
          > ul {
            .nav-link {
              > a {
                line-height: calc(${headerHeight} + 1rem);

                ${md} {
                  line-height: 1;
                }
              }
            }
          }

          .dropdown {
            top: 70%;
            padding-top: 25px;

            ${md} {
              padding-top: 0;
            }
            .arrow {
              top: 20.5px;

              ${md} {
                top: 61.5px;
              }
            }
            &.second {
              top: 0;
              padding-top: 0;
              .arrow {
                top: 12.5px;
              }
            }
          }
        }
      }
    }
  }

  #check {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: ${hamburgerSize};
    height: ${hamburgerSize};
    z-index: 9;
    cursor: pointer;
    opacity: 0;
    display: none;
    ${md} {
      display: block;
    }
  }
  #check:checked ~ .hamburger-menu-container .hamburger-menu div {
    background-color: transparent;
  }
  #check:checked ~ .hamburger-menu-container .hamburger-menu div::before {
    transform: translateY(0) rotate(-45deg);
  }
  #check:checked ~ .hamburger-menu-container .hamburger-menu div::after {
    transform: translateY(0) rotate(45deg);
  }
  #check:checked ~ .nav-btn {
    transform: translateX(0);
  }
  #check:checked ~ .nav-btn .nav-link,
  #check:checked ~ .nav-btn .log-sign {
    animation: animation 0.4s ease forwards;
  }

  #check:checked ~ .nav-btn .nav-link {
    &:nth-of-type(1) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(2) {
      animation-delay: 0.65s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.8s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.95s;
    }
    &:nth-of-type(5) {
      animation-delay: 1.1s;
    }
  }
  #check:checked ~ .nav-btn .log-sign {
    animation-delay: 1.35s;
  }

  @keyframes animation {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Hamburger = styled.div`
  ${md} {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .hamburger-menu {
      width: ${hamburgerSize};
      height: ${hamburgerSize};
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        width: 1.6rem;
        height: 3px;
        border-radius: 3px;
        background-color: #000;
        position: relative;
        z-index: 1;
        transition: 0.5s;

        &::before,
        &::after {
          content: "";
          position: absolute;
          width: inherit;
          height: inherit;
          background-color: #000;
          border-radius: 3px;
        }

        &::before {
          transform: translateY(-7px);
        }

        &::after {
          transform: translateY(7px);
        }
      }
    }
  }
`;

export default Header;
