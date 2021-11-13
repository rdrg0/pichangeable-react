import { useReducer } from "react";

export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const CHANGE_LOGIN_VALUE = "CHANGE_LOGIN_VALUE";

function sessionReducer(state, action) {
  switch (action.type) {
    case SIGN_IN:
      const { name, role, token } = action;
      return { ...state, name, role, token };
    case SIGN_OUT:
      return { ...state, token: null };
    case CHANGE_LOGIN_VALUE:
      return { ...state, [action.target.name]: action.target.value };
    default:
      return state;
  }
}

export default function useSessionReducer() {
  const [state, dispatch] = useReducer(sessionReducer, {
    token: null,
    name: null,
    role: null,
    email: "",
    password: "",
  });

  return [state, dispatch];
}
