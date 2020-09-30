import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

/** components */
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";
import LoaderSpinner from "../components/LoaderSpinner";

/** interfaces */
import { SayHelloData, SayHelloVars } from "../interfaces";

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
  const { loading, data } = useQuery<SayHelloData, SayHelloVars>(
    SAY_HELLO_QUERY,
    {
      variables: { name: "Good Dillon!!!" },
    }
  );

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

export default Test;
