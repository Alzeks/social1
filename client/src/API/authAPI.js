import {$host, $authHost} from './index'
//import jwt_decode from 'jwt-decode'


export const registration = async (phone, password, name) => {
  const {data} = await $host.post('api/auth/registration',
  {phone, password, name})
  //  localStorage.setItem(data.token)
  // return jwt_decode(data.token)
return data
}
export const login = async (phone, password) => {
const {data} = await $host.post('api/auth/login',
  {phone, password})
  // localStorage.setItem( data.token)
  // return jwt_decode(data.token)
  return data
}
export const check = async () => {
//  const response = await $host.post('api/auth/auth')
   const {data} = await $authHost.get('api/user/auth')
  //const {data} = await $authHost.get('api/auth/registration')
  //localStorage.setItem('token', data.token)
  //return jwt_decode(data.token)
  //return response
}
