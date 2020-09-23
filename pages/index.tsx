// import styled from "styled-components";

/** components */
import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
  imageUrl:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80",
};

const Home: React.FC = () => {
  return (
    <Layout {...attributeLayout}>
      {/* <Wrapper>
        <div className="overlay"></div>
      </Wrapper> */}
      <ImageSlider />
    </Layout>
  );
};

export default Home;
