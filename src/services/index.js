import axios from 'axios'

const api = axios.create({ baseURL: 'https://dragonnodeapi.herokuapp.com/'})

export const endpoints = {
    dragon:`/dragon/`,
    createdragon:`/dragon/`,
    updatedragon:(id) =>`/dragon/${id}`,
    deletedragon: (id) =>`/dragon/${id}`,
}

export default api