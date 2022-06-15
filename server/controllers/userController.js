const uuid = require('uuid')
const path = require('path')
const ApiError = require('../error/ApiError')
const {Auth, Users, Chat, Messages} = require('../models/models')

class UserController {
//   async create(req, res, next){
//     try{
//     const {name, info} = req.body
//     const {img} = req.files
//    let fileName = uuid.v4() + '.PNG'
//    img.mv(path.resolve(__dirname, '..', 'static', fileName))
// const device = await Auth.create(
//    { img: fileName});
// return res.json(device)
//   }catch (e){ next(ApiError.badRequest(e.message))}
//   }

  async updateUser(req, res, next){
const {id} = req.body
const {img} = req.files
console.log( img);
let fileName = uuid.v4() + '.PNG'
img.mv(path.resolve(__dirname, '..', 'static', fileName))

 const user = await Users.update(
   {img: fileName},{where: {id}},
)
let oneId = id; let twoId = id
const chatuser = await Chat.update(
  {oneImg: fileName},{where: {oneId}},)

const chatuser1 = await Chat.update(
  {twoImg: fileName},{where: {twoId}},)
   return res.json(user)
  }

    async getALL(req, res, next){
    const users = await Users.findAll()
         console.log(users);
         return res.json(users)
     }

    async getOne(req, res, next){
      const {id} = req.params
    if(!id) return res.json('no id')
    console.log('getOne',{id});
    try{
      const user = await Users.findOne({where: {id}})
      return res.json(user)
}catch(e){ next(ApiError.internal(e.message))}
    }

    async deleteOneUser(req, res){console.log('deleteOne');
    let {id} = req.params
    if(!id) return res.json('no id')
    const userAuth = await Auth.destroy({where: {id}})
    const user = await Users.destroy({ where: {id}})

    let oneId = id; let twoId = id;
    let  chats1 = await Chat.findAll({where: {oneId} })
    let chats2 = await Chat.findAll({where: {twoId}})
     console.log('getAll',chats1,chats2);
     let chats = chats1.concat(chats2)

     chats.forEach(async(item) => {
      let chatId = item.id
      let deleteMessage = await Messages.destroy({where: {chatId}})
       id = chatId;
       const deleteChat =  Chat.destroy({where: {id}})
     });
    return res.json(user)
    }

}
module.exports = new UserController()
