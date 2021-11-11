import { Global, css } from "@emotion/react";
import Header from "./component/Header";

const globalCSS = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap');

  :root {
    --dark-green: #2F855A;
    --light-green: #48BB78;
    --green: #68D391;
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
    font-family: 'Inter', sans-serif;
    font-size: 18px;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalCSS} />
      <Header />

    </>
  );
}

export default App;
