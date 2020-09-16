import styled from "styled-components";
import { gql, useQuery } from "@apollo/client";

/** components */
import Layout from "../components/Layout";

const [title] = ["청우종합건설"];

interface SayHelloData {
  sayHello: { text: string; error: string };
}

interface SayHelloVars {
  name: string;
}

const SAY_HELLO_QUERY = gql`
  query GetSayHello($name: String!) {
    sayHello(name: $name) {
      text
      error
    }
  }
`;

const sayHelloQueryVars = {
  name: "Good Dillon!!!",
};

const Home: React.FC = () => {
  const { loading, data } = useQuery<SayHelloData, SayHelloVars>(
    SAY_HELLO_QUERY,
    {
      variables: sayHelloQueryVars,
    }
  );

  return (
    <Layout title={title}>
      Hello World!!
      <Red>Red</Red>
      <h2>{!loading && data && data.sayHello.text}</h2>
    </Layout>
  );
};

const Red = styled.p`
  color: red;
`;

export default Home;
