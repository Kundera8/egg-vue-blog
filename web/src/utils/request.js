import axios from 'axios'
// import { Message } from 'element-ui'
// import { isFormData } from '@/utils/types'
// import store from '@/store'
// import router from '@/router'


/* const showMessage = (message, type = 'error', showClose = false, duration = 3000) => {
  Message({ type, showClose, duration, message })
} */

// create an axios instance
const service = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// request interceptor
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
