import axios from "axios";

axios.defaults.baseURL = 'https://apichangeable.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:3000';


export const AxiosIndexReservation = () => {
  return axios('/reservations', { 
    method: 'GET',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response))
};

export const AxiosShowReservation = (id) => {
  return axios(`/reservations/${id}`, {
    method: 'GET',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response))
};

export const AxiosCreateReservation = (data) => {
  return axios('/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: data
  })
  .then(response => response.data)
  .catch(error => console.log(error.response))
};

// data={
// 	"start_date_hour": "2022-12-07T09:00:00.000Z",
// 	"end_date_hour": "2022-12-07T12:00:00.000Z",
// 	"total": 1000,
// 	"field_id": 5
// }

export const AxiosUpdateReservation = (id, data) => {
  return axios(`/reservation/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    },
    data: data
  })
};

export const AxiosDeleteReservation = (id) => {
  return axios(`/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Token token=${sessionStorage.getItem('token')}`
    }
  })
  .then(response => response.data)
  .catch(error => console.log(error.response))
};