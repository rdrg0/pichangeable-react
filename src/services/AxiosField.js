import axios from "axios";

axios.defaults.baseURL = 'https://apichangeable.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';

export const AxiosIndexField = () => {
  return axios('/fields', {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => {
    sessionStorage.setItem('fieldsData', JSON.stringify(response.data));
    return response.data;
  })
  .catch(error => console.log(error.response));
};

export const AxiosShowField = (id) => {
  return axios(`/fields/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response));
};

export const AxiosCreateField = (dataform) => {
  console.log(typeof dataform)
  console.log( dataform)
  return axios('/fields', {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: dataform
  })
  .then(response => response.data)
  .catch(error => console.log(error.response));
};

export const AxiosDeleteField = (id) => {
  return axios(`/fields/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response));
};