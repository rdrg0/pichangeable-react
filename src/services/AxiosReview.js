import axios from "axios";

axios.defaults.baseURL = 'https://apichangeable.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';


export const AxiosIndexReview = (FieldId) => {
  return axios(`/fields/${FieldId}/reviews`, {
    method: 'GET',
    headers: {
      'Authorization' : `Token token=${sessionStorage.getItem('token')}`
    }
  })
    .then(response => response.data)
    .catch(error => console.log(error.response))
};

export const AxiosCreateReview = (FieldId,data) => {
  return axios(`/fields/${FieldId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : `Token token=${sessionStorage.getItem('token')}`
    },
    data: data
  })
    .then(response => response.data)
    .catch(error => console.log(error.response))
};

// data={
//   "rating": 5,
//   "comment": "Pruebas version 2"
// }

export const AxiosDeleteReview = (FieldId) => {
  return axios(`/fields/${FieldId}/reviews`, {
    method: 'DELETE',
    headers: {
      'Authorization' : `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response))
};