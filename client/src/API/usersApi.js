import {$host} from './index'

export const createUser = async (user) => {
  const {data} = await $host.post('api/user', user)
  return data
}
export const updateUser = async (user) => {
  const {data} = await $host.put('api/user', user)
  return data
}
export const fetchUsers = async () => {
  const {data} = await $host.get('api/user')
  return data
}

 export const getOneUser = async (id) => {
   const {data} = await $host.get('api/user/' + id)
   return data
  }
  export const deleteUser = async (id, chatId) => {
    console.log(id)
    const {data} = await $host.delete('api/user/'+ id)
    return data
   }
