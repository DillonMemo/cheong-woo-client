import React, { ReactNode, useEffect } from "react";
import Head from "next/head";
// import { useRouter } from "next/router";
import styled from "styled-components";

type Props = {
  children?: ReactNode;
  title?: string;
  //   description?: string;
  //   imageUrl?: string;
};

const Layout: React.FC<Props> = ({
  children,
  title = "청우종합건설",
  //   description = "",
  //   imageUrl = "",
}) => {
  //   const router = useRouter();

  useEffect(() => {
    return;
  }, []);

  return (
    <div style={{ overflowX: "hidden" }}>
      <Head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700&family=Roboto:wght@100;300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ContainerWrapper>{children}</ContainerWrapper>
    </div>
  );
};

const ContainerWrapper = styled.div``;

export default Layout;
