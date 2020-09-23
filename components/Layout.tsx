import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

/** Components */
import Header from "./Header";
import Footer from "./Footer";

/** styles */
import { defaultPalette } from "../utils/styles";

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

  useEffect(() => {
    return;
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
      <Footer />
    </div>
  );
};

const ContainerWrapper = styled.div`
  border-bottom: 1px solid ${defaultPalette.accent1};
`;

export default Layout;
