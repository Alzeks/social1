
const {Users, Chat, Messages} = require('../models/models')
const ApiError = require('../error/ApiError')

class ChatController {
  async create(req, res, next){
  const {oneId, twoId, oneName, oneImg, twoName, twoImg } = req.body
  if(!oneId || !twoId || !oneName || !twoName
      || oneId === twoId)return res.json( 'no data')
 const chat = await Chat.create({oneId, twoId,
      oneName, oneImg, twoName, twoImg  })
 const  chats = await Chat.findAll({where: {oneId}})
  return res.json(chats)
  }

  async getAll(req, res, next){
    let {oneId, twoId} =  req.query
    console.log('getAll',oneId, twoId);
if(!oneId || oneId === twoId) return res.json('no data')
try{
  if(!twoId ){
    [twoId = oneId]
    let  chats1 = await Chat.findAll({where: {oneId} })
    let chats2 = await Chat.findAll({where: {twoId}})
     //console.log('getAll',chats1,chats2);
     let chats = chats1.concat(chats2)
     if(chats.length === 0)return res.json('no data')
       return res.json(chats)
    }
 const chat = await Chat.findOne({where: {oneId, twoId}})
      let unit = oneId;//!1
      [oneId = twoId]//!!
      [twoId = unit];console.log(9, oneId, twoId, chat);
 const  chater = await Chat.findOne({where: {oneId, twoId}})
//console.log('findOne', chat,chater);
if(chat === null && chater === null)  return res.json([])
oneId = unit;//!!

  let chats1 = await Chat.findAll({where: {oneId} })
  let chats2 = await Chat.findAll({where: {twoId}})
 let chats = chats1.concat(chats2)
       return res.json(chats)
    }catch (e){ next(ApiError.internal(e.message))}
   }

   async deleteChat(req, res, next){
     const{chatId, mainId}= req.query
const deleteMessage = await Messages.destroy({where: {chatId}})
let id = chatId
const deleteChat = await Chat.destroy({where: {id}})
if(deleteChat === 1){
  let oneId = mainId
  let twoId = mainId
  let  chats1 = await Chat.findAll({where: {oneId} })
  let  chats2 = await Chat.findAll({where: {twoId}})
  let chats = chats1.concat(chats2)
  return res.json(chats)
}
        return res.json(null)

    }
       async createMessage(req, res, next){
 const {message, id, typeMessage} =  req.body
       if(!message || !id || !typeMessage)return res.json([])
 const  chat = await Chat.findOne({where: {id}})
       if(!chat) return res.json('no chat')
 let chatId = id
 const  setMessage = await Messages.create({message, chatId, typeMessage})

 const  getsMessages = await Messages.findAll({where: {chatId}})
        return res.json(getsMessages)
    }

    async getMessage(req, res, next){
      const{chatId}= req.query
 const  getsMessages = await Messages.findAll({where: {chatId}})
         return res.json(getsMessages)
     }
     async deleteMessage(req, res, next){
       const{id, chatId}= req.query
  const message = await Messages.destroy({where: {id}})
const  getsMessages = await Messages.findAll({where: {chatId}})
          return res.json(getsMessages)
   }
}
module.exports = new ChatController()
