import { Global, css } from "@emotion/react";
import Header from "./component/Header";
import { Footer } from "./component/Footer";
import Card from "./component/Card";
import { Search } from "./component/Search";
import Hero from "./component/Hero";

const globalCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap");

  :root {
    --white: #ffffff;
    --dark-green: #2f855a;
    --light-green: #48bb78;
    --green: #68d391;
    --light-gray: #f6f6f9;
    --grey: #616161;
    --dark-gray: #373737;
    --black: #000000;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background: var(--light-gray);
    height: 100vh;
    margin: 0;
    font-family: "Inter", sans-serif;
    font-size: 18px;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <Header />
      <Search />
      <Card />
      <Footer />
      <Hero />
    </>
  );
}

export default App;
