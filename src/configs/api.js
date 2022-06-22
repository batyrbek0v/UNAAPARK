import axios from 'axios'
const URL_BASE = 'https://cars-c0e3b-default-rtdb.asia-southeast1.firebasedatabase.app'

export const API = {
  get: () => {
    return axios.get(`${URL_BASE}/cars.json`)
  },
  post: (data) => {
    return axios.post(`${URL_BASE}/cars.json`, data)
  },
  postReview: (id, data) => {
    return axios.post(`${URL_BASE}/cars/${id}/review.json`, data)
  },
  getReview: (id) => {
    return axios.get(`${URL_BASE}/cars/${id}/review.json`)
  },
}

export const Message = {
  get: (uid) => {
    return axios.get(`${URL_BASE}/message/${uid}.json`)
  },

  post: (uid, data) => {
    return axios.post(`${URL_BASE}/message/${uid}.json`, data)
  },
  postFirstMessage: (data) => {
    return axios.post(`${URL_BASE}/firstMessage.json`, data)
  },
  getFirstMessage: () => {
    return axios.get(`${URL_BASE}/firstMessage.json`)
  }
}


export const toBase = {
  post: (uid, data) => {
    return axios.post(`${URL_BASE}/favorites/${uid}/product.json`, data)
  },
  isSaved: (uid, id, data) => {
    return axios.post(`${URL_BASE}/favorites/${uid}/product/${id}/saved.json`, data)
  },
}


export const getSavedCars = (uid) => axios.get(`${URL_BASE}/favorites/${uid}/.json`)

export const removeSavedCar = (uid, id) => axios.delete(`${URL_BASE}/favorites/${uid}/${id}.json`)
