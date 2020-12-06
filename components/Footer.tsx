import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

/** styles */
import { defaultPalette, md } from "../utils/styles";

const Footer: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <FooterWrapper>
        <div className="footer-addr">
          <h1 className="footer-logo">
            <img src="../static/logo/logo_128.png" alt="logo" width={64} />
          </h1>
          <h2>Contact</h2>
          <address>
            경기도 광주시 중앙로187번길 21, 1층 2호(송정동) <br />
            <div className="footer-btn-group">
              <a href="tel:+82 10 45560409" className="footer-btn">
                Call US
              </a>
              <a href="mailto:cwcs1122@hanmail.net" className="footer-btn">
                Email US
              </a>
            </div>
          </address>
        </div>

        <div className="footer-content">
          <ul className="footer-nav">
            <li className="nav-item">
              <Link href="/">
                <a>
                  <h2 className="nav-title">Home</h2>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a>
                  <h2 className="nav-title">About</h2>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/business">
                <a>
                  <h2 className="nav-title">Business</h2>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/corporateidentity">
                <a>
                  <h2 className="nav-title">CI</h2>
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="#">
                <a>
                  <h2 className="nav-title">Projects</h2>
                </a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/career">
                <a>
                  <h2 className="nav-title">Career</h2>
                </a>
              </Link>
            </li>
          </ul>
          <div className="legal">
            <p>&copy; 2020 Cheong woo Inc. All rights reserved.</p>
            <div className="legal-links">
              <ul className="links">
                <li onClick={() => router.push("/policy/privacy")}>
                  개인정보 보호정책
                </li>
                <li style={{ fontSize: ".65rem" }}>
                  🧑‍💻 be made by Dillon Jang{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <ul className="footer-nav">
          <li className="nav-item">
            <h2 className="nav-title">Home</h2>
            <ul className="nav-ul">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item nav-item-extra">
            <h2 className="nav-title">About</h2>
            <ul className="nav-ul nav-ul-extra">
              <li>
                <Link href="/about#information">
                  <a>기업정보</a>
                </Link>
              </li>
              <li>
                <Link href="/about#greetings">
                  <a>CEO 인사말</a>
                </Link>
              </li>
              <li>
                <Link href="/about#history">
                  <a>연혁</a>
                </Link>
              </li>
              <li>
                <Link href="/about#address">
                  <a>회사위치</a>
                </Link>
              </li>
              <li>
                <Link href="/about#partners">
                  <a>관계사 현황</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <h2 className="nav-title">Business</h2>
            <ul className="nav-ul">
              <li>
                <Link href="#">
                  <a>Business</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <h2 className="nav-title">Projects</h2>
            <ul className="nav-ul">
              <li>
                <Link href="#">
                  <a>Projects</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <h2 className="nav-title">Career</h2>
            <ul className="nav-ul">
              <li>
                <Link href="#">
                  <a>Career</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>&copy; 2020 Cheong woo Inc. All rights reserved.</p>
          <div className="legal-links">
            <ul className="links">
              <li>개인정보 보호정책</li>
              <li>서비스 이용약관</li>
              <li style={{ fontSize: ".65rem" }}>
                🧑‍💻 be made by Dillon Jang{" "}
              </li>
            </ul>
          </div>
        </div> */}
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;
  /* padding: 2rem 2rem 1.25rem 2rem; */
  padding: 1rem 1rem 0.75rem 1rem;
  color: ${defaultPalette.accent4};
  background-color: ${defaultPalette.background};
  max-width: 100rem;
  margin: 0 auto;

  .footer-addr {
    flex: 1 0px;
    /* margin-right: 1.25rem;
    margin-bottom: 2rem; */

    ${md} {
      flex: 1 100%;
    }

    h2 {
      margin-top: 1.3rem;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 400;
    }

    address {
      font-style: normal;
      color: ${defaultPalette.accent4};

      .footer-btn-group {
        display: flex;
        margin-top: 0.5rem;

        .footer-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.25rem;
          max-width: max-content;
          margin: 0.6rem 0;
          padding: 0 1.3rem;
          font-size: 1rem;
          color: ${defaultPalette.accent4};
          border-radius: 5rem;
          border: 1px solid ${defaultPalette.accent4};
          transition: 0.4s ease-out;

          &:hover {
            background-color: ${defaultPalette.accent4};
            color: #fff;
          }

          &:nth-of-type(1) {
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  .nav-title {
    font-weight: 400;
    font-size: 1.25rem;
    /* color: #000; */
    color: ${defaultPalette.accent4};
    transition: color 0.4s ease;

    ${md} {
      font-size: 1rem;
    }
    &:hover {
      color: ${defaultPalette.accent8} !important;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  li {
    line-height: 2rem;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    transition: color 0.4s ease;

    g {
      transition: all 0.4s ease;
    }

    &:hover {
      color: ${defaultPalette.accent8} !important;

      &.fill {
        g {
          fill: ${defaultPalette.accent8} !important;
        }
      }
      &.stroke {
        g {
          stroke: ${defaultPalette.accent8} !important;
        }
      }
    }
  }

  .footer-content {
    flex: 2 0px;
    display: flex;
    flex-flow: column wrap;
  }

  .footer-nav {
    flex: 2 0px;
    display: flex;
    flex-flow: row wrap;

    ${md} {
      flex: 1 100%;
    }

    > * {
      flex: 1;
      margin-right: 1.25rem;

      ${md} {
        flex: 1 50%;
        margin-bottom: 0.5rem;
      }
    }

    .nav-item-extra {
      flex-grow: 2;
    }

    .nav-ul {
      &.nav-ul-extra {
        column-count: 2;
        column-gap: 1.25rem;
      }

      a {
        color: ${defaultPalette.accent4};
      }
    }
  }

  .legal {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: ${defaultPalette.accent4};
    /* flex: 1 100%; */
    /* footer를 얇게 수정 */
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;

    ${md} {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }

    p {
      width: 100%;
      text-align: right;
      margin: 0;
    }

    .legal-links {
      display: flex;
      align-items: center;
      margin-left: auto;

      ${md} {
        margin-left: 0;
        font-size: 0.65rem;
      }

      .links {
        position: relative;
        text-align: right;
        margin: 0;
        font-weight: 300;

        li {
          cursor: pointer;
          position: relative;
          display: inline-block;
          margin-left: 1.5rem;

          &:first-child {
            margin-left: 0;

            &::before {
              display: none;
            }
          }

          &::before {
            position: absolute;
            content: "";
            background-color: #9ea0a9;
            width: 1px;
            height: 1rem;
            top: 7px;
            left: -12px;
          }
        }
      }
    }
  }
`;

export default Footer;
