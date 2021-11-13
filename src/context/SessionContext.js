<<<<<<< HEAD
import React from "react";
import { createContext } from "react";
=======
import React, { createContext } from "react";
>>>>>>> 7d45e1ee0c4ef0ee079fe652f5020bcb8fb0f4fe
import useSessionReducer, {
  SIGN_IN,
  SIGN_OUT,
  CHANGE_LOGIN_VALUE,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  session: null,
  signIn: () => {},
  logout: () => {},
  handleChangeLogin: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();

  function handleChangeLogin(e) {
    dispatch({ type: CHANGE_LOGIN_VALUE, target: e.target });
    console.log(e.target.name, e.target.value);
  }

  function signIn(token, userData) {
    // dispatch({ type: SIGN_IN, token, userData });
    console.log(token, userData);
  }

  function logout() {
    dispatch({ type: SIGN_OUT });
  }
  const value = {
    session,
    signIn,
    logout,
    handleChangeLogin,
  };
  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
