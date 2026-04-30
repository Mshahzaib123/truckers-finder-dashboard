import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 1000,
})

instance.interceptors.request.use() // update to add auth token

instance.interceptors.response.use() // update to handle errors

export default instance
