import React from "react";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewField from "./pages/NewField";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import EditField from "./pages/EditField";
import { NotFound } from "./pages/NotFound";
import { SessionProvider } from "./context/SessionContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import SignFlow from "pages/SignFlow";
import DetailFieldPage from "pages/DetailFieldPage";
import { Calendar } from "./component/Calendar";

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
      <SessionProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/signflow" component={SignFlow} />
            <Route path="/detailfield" component={DetailFieldPage} />
            <Route path="/home" component={Home} />
            <ProtectedRoute path="/newfield" component={NewField} />
            <ProtectedRoute path="/editfield" component={EditField} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </SessionProvider>
    </>
  );
}

export default App;
