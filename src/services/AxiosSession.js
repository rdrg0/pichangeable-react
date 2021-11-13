import axios from "axios";

axios.defaults.baseURL = "https://pichangeableapi.herokuapp.com";

export const AxiosLogin = (data) => {
  return axios("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: data,
  })
    .then(function (response) {
      // sessionStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const AxiosLogout = () => {
  return axios("/logout", {
    method: "POST",
    headers: {
      Authorization: `Token token=${sessionStorage.getItem("token")}`,
    },
  })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error.response);
    });
};
