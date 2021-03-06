import axios from 'axios'

 const $host = axios.create({
  baseURL: 'http://localhost:8000/'
  //baseURL: REACT_APP_API_URL
})
const $authHost = axios.create({
  baseURL: 'http://localhost:8000/'
})

const authInterceptor = config  => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}
$authHost.interceptors.request.use(authInterceptor)

export {
  $host,
$authHost,
}
