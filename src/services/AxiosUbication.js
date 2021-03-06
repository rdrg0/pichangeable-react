import axios from "axios";

axios.defaults.baseURL = 'https://apichangeable.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';

export const AxiosIndexUbication = () => {
  return axios('/ubications',{
    method: 'GET',
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const AxiosCreateUbication = (data) => {
  return axios('/ubications',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: data,
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

// data = {
//   "district": "San Sebastian",
//   "departament": "Cusco"
// }