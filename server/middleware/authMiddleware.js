const jwt = require('jsonwebtoken')
const ApiError = require('../error/ApiError')

module.exports = function(req, res, next){
  if(req.method === 'OPTIONS'){next()}
  try{//console.log(req.headers.authorization);
const token = req.headers.authorization.split(' ')[1]//.split('.')[1] //bearer
console.log(token);
  if(!token){res.status(401).json('no token')}
  console.log(process.env.SECRET_KEY)
const decoded = jwt.verify(token, process.env.SECRET_KEY)
//const decoded = 'ok'
console.log('pass middleware');
req.user = decoded
next();
}catch(e){res.status(401).json('no authorised2')}
}
