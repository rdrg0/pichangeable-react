import axios from "axios";

axios.defaults.baseURL = 'https://apichangeable.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';

export const AxiosShowUser = () => {
  return axios('/users',{
    method: 'GET',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const AxiosCreateUser = (data) => {
  console.log(data);
  return axios('/users',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: data
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const AxiosUpdateUser = (data, id) => {
  return axios(`/users/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: data
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

export const AxiosDeleteUser = (id) => {
  return axios(`/users/${id}`,{
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      console.log(error.response);
    });
};

// data={
// 	"name": "uwu",
// 	"email": "uwu@mail.com",
// 	"phone": "975318642",
// 	"role": 0 ,
// 	"password": "123456"
// }