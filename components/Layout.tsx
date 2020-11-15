import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

/** Components */
import Header from "./Header";
import Footer from "./Footer";

/** styles */
import { brandColor, defaultPalette, lg, md, sm, xxs } from "../utils/styles";
import { ArrowUp } from "../utils/icons";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  imageUrl?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "청우종합건설",
  description = "",
  imageUrl = "",
}) => {
  const router = useRouter();
  const goTop = useRef<HTMLAnchorElement>(null);

  /**
   * @description show back to top button
   */
  const handler = useCallback(() => {
    if (!goTop.current) return;
    const scrollPos = window.scrollY;

    if (scrollPos > 10) {
      goTop.current.classList.add("show");
    } else {
      goTop.current.classList.remove("show");
    }
  }, []);

  /**
   * @description scroll is go to top
   */
  const handleScrollToTop = useCallback((): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <meta charSet="utf-8" />
        {/* content="article"은 기사, 뉴스소식, 블로그 게시물에 대한 설정 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {/* <meta property="og:url" content={`https://cheongwoo.co.kr`} /> */}
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700&family=Roboto:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header router={router} />
      <ContainerWrapper>{children}</ContainerWrapper>
      {/* back to top button */}
      <TopButton ref={goTop} onClick={handleScrollToTop}>
        <ArrowUp stroke="white" />
      </TopButton>
      <Footer />
    </div>
  );
};

const ContainerWrapper = styled.div`
  border-bottom: 1px solid ${defaultPalette.accent1};

  .title-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 10vw;
    color: #000;
    position: relative;

    h1 {
      font-size: 3.5rem;
      margin: 0;
      color: ${defaultPalette.foreground};

      ${md} {
        font-size: 2rem;
      }
    }
    p {
      font-size: 1rem;
      margin: 0;
      color: ${defaultPalette.foreground};

      ${md} {
        font-size: 0.7rem;
      }
    }
  }

  .container {
    margin: 0 auto;

    p {
      margin: 1rem auto;
      text-align: center;
    }

    > section {
      display: flex;
      padding: 2rem;

      .wrapper {
        display: flex;
      }

      .row,
      &.row {
        flex-direction: row;

        ${md} {
          flex-direction: column;
        }
      }

      .mobile-reverse-row,
      &.mobile-reverse-row {
        flex-direction: row;

        ${md} {
          flex-direction: column-reverse;
        }
      }

      .column,
      &.column {
        flex-direction: column;
      }
    }
  }
`;

export const MessageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  ${lg} {
    font-size: 2rem;
  }

  ${sm} {
    font-size: 1.7rem;
    font-weight: 500;
  }

  ${xxs} {
    font-size: 1.3rem;
  }
`;

export const MessageTitleWithUnderline = styled.h1`
  display: inline-block;
  font-size: 2.5rem;
  font-weight: 500;
  text-align: center;
  ${lg} {
    font-size: 2rem;
  }

  ${sm} {
    font-size: 1.7rem;
    font-weight: 500;
  }

  ${xxs} {
    font-size: 1.3rem;
  }

  &:after {
    content: "";
    width: 100%;
    height: 2px;
    display: flex;
    background-color: black;
    margin-top: 0.8rem;
  }
`;

export const MessageSubTitle = styled.p`
  font-size: 1.5rem;

  ${lg} {
    font-size: 1.3rem;
  }

  ${sm} {
    font-size: 1.2rem;
  }

  ${xxs} {
    font-size: 1rem;
  }
`;

export const MessageContent = styled.p`
  font-size: 1rem;
  font-weight: lighter;
  margin: 0;
  padding: 0 7rem;

  ${sm} {
    font-size: 0.8rem;
    padding: 0;
  }
`;

const TopButton = styled.a`
  display: inline-block;
  background-color: ${brandColor.normal};
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  z-index: 9;

  svg {
    width: 100%;
    height: 100%;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    background-color: ${brandColor.light};
  }
`;

export default Layout;
