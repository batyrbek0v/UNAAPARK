import axios from 'axios'
const URL_BASE = 'https://cars-c0e3b-default-rtdb.asia-southeast1.firebasedatabase.app'

export const API = {
  get: () => {
    return axios.get(`${URL_BASE}/cars.json`)
  },
  post: (data) => {
    return axios.post(`${URL_BASE}/cars.json`, data)
  }
}

export const Message = {
  get: () => {
    return axios.get(`${URL_BASE}/message.json`)
  },

  post: (data) => {
    return axios.post(`${URL_BASE}/message.json`, data)
  }
}

export const Answer = {
  get: () => {
    return axios.get(`${URL_BASE}/messageAnswer.json`)
  }
}

export const toBase = {
  get: (uid) => {
    return axios.get(`${URL_BASE}/favorites/${uid}.json`)
  },

  post: (uid, data) => {
    return axios.post(`${URL_BASE}/favorites/${uid}.json`, data)
  },
  delete: (uid, id) => {
    return axios.delete(`${URL_BASE}/favorites/${uid}/${id}.json`,)
      .then(res => console.log(res.data))
  }
}
