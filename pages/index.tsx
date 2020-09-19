import styled from "styled-components";

/** components */
import Layout from "../components/Layout";

const [title] = ["청우종합건설"];

const Home: React.FC = () => {
  return (
    <Layout title={title}>
      <Wrapper>
        <div className="overlay"></div>
      </Wrapper>
    </Layout>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  background: url("https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80")
    no-repeat center center / cover;
  overflow: hidden;

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export default Home;
