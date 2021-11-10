import { Global, css } from "@emotion/react";
import { FontTitle, FontSizeBig, FontSizeMedium, FontMediumGreen, FontHeaderLabel, FontSizeSmall } from "./component/UI/Typography";

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
      <FontTitle>Encuentra tu cancha ideal</FontTitle>
      <FontSizeBig>Encuentra tu cancha ideal</FontSizeBig>
      <FontSizeMedium>Encuentra tu cancha ideal</FontSizeMedium>
      <FontMediumGreen>Encuentra tu cancha ideal</FontMediumGreen>
      <FontHeaderLabel>Encuentra tu cancha ideal</FontHeaderLabel>
      <FontSizeSmall>Encuentra tu cancha ideal</FontSizeSmall>
    </>
  );
}

export default App;
