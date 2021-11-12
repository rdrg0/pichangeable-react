import React from "react";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./component/Header";
// import { Footer } from "./component/Footer";
// import Card from "./component/Card";
// import { Search } from "./component/Search";
// import { TeamProfiles } from "./component/TeamProfiles";
import Login from "./pages/Login";
import SignFlow from "./pages/SignFlow";
import Maps from "./component/Map";
import Signup from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";


const globalCSS = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter&family=Montserrat&display=swap');

  :root {
    --white: #FFFFFF;
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
        <Maps />
      <Global styles={globalCSS} />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/index" component={IndexField} />
          <Route path="/newfield" component={NewField} />
          <Route path="/editfield" component={EditField} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
