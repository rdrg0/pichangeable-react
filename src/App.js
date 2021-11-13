import React from "react";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewField from "./pages/NewField";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignFlow from "./pages/SignFlow";
import Signup from "./pages/SignUp";
import EditField from "./pages/EditField";
import { NotFound } from "./pages/NotFound";
import Header from "./component/Header"
import {Footer} from "./component/Footer"
import DetailField from "./component/DetailField"
import ProtectedRoute from "./routes/ProtectedRoute";

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
      <Header />
      <DetailField/>
      <Footer />
      <Global styles={globalCSS} />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/newfield" component={NewField} />
          <ProtectedRoute path="/editfield" component={EditField} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
