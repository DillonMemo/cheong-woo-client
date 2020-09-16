import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

/** components */
import Layout from "../components/Layout";
import Skeleton from "../components/Skeleton";

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

const Home: React.FC = () => {
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
          <h2>{!loading && data && data.sayHello.text}</h2>
        </div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Home;
