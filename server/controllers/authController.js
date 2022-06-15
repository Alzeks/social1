const bcrypt = require('bcrypt')
const {Auth, Users} = require('../models/models')
const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')


const generateJwt = (id, name, password)=>{
  //const generateJwt = (password)=>{
  return jwt.sign(
     {id, name, password},
     //{password},
     process.env.SECRET_KEY,
     {expiresIn: '24'}
   )
}
class AuthController {
async registration(req, res, next){
  const {phone, password, name} = req.body
  console.log(req.body);
  if(!phone || !password || !name)return res.json({mess: 'no base params'})
try{
  const  candidat = await Auth.findOne({where: {phone}})
  if(candidat)return res.json({mess: 'exist'})

  const hashPassword = await bcrypt.hash(password, 3)
  const userAuth = await Auth.create({phone, password: hashPassword, name})
  const authId = userAuth.id
  //console.log('registr',authId);
  const mainUser = await Users.create({phone, name, authId})
  const token = generateJwt(userAuth.id, userAuth.phone)
   //console.log({token, mainUser});
   return res.json({token, mainUser})
   }catch (e){ next(ApiError.internal(e.message))}
}
 async login(req, res, next){
   const {phone, password} = req.body
   const user = await Auth.findOne({where: {phone}})
   if(!user){return res.json({mess:'no sach user'})}
let comparePass = bcrypt.compareSync(password, user.password)
if(!comparePass){return res.json({mess:'no sach password'})}
const token = generateJwt(user.id, user.phone)
//const token = generateJwt(user.password)
const authId = user.id
const mainUser = await Users.findOne({where: {authId}})

return res.json({token, mainUser})

 }
  async check(req, res, next){
    // const token = generateJwt(
    //   req.user.id, req.user.email, req.user.role)
    // return res.json({token})
   res.json('user/auth works')
   }
    async getAll(req, res){
      const regAll = await User.findAll()
      return res.json(regAll)
        }
}
module.exports = new AuthController()
