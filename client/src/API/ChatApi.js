import {$host} from './index'

export const createChat = async (oneId, twoId, oneName, oneImg,
twoName, twoImg) => {
  const {data} = await $host.post('api/chat', {oneId, twoId, oneName, oneImg, twoName, twoImg })
return data
}

export const fetchChats = async (oneId , twoId) => {
  const {data} = await $host.get('api/chat',
  {params: {oneId, twoId}})
  return data
}
export const createMessage = async (message, id, typeMessage) => {
  const {data} = await $host.post('api/chat/message',
  {message, id, typeMessage})
return data
}
export const getMessages = async (chatId) => {
const {data} = await $host.get('api/chat/message', {params: {chatId}})
return data
}
export const deleteChat = async (chatId, mainId) => {
const {data} = await $host.delete('api/chat/',
{params: {chatId, mainId}})
return data
}
export const deleteMessage = async (id, chatId) => {
const {data} = await $host.delete('api/chat/message',
{params: {id, chatId}})
return data
}
