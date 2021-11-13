import React, { createContext } from "react";
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

  function signIn(token, name, role) {
    dispatch({ type: SIGN_IN, token, name, role });
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
