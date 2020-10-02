// import styled from "styled-components";

/** components */
import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";

const attributeLayout = {
  title: "청우종합건설",
  description: "That's site is development mode - cheongwoo",
  imageUrl: "../static/main_3",
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
