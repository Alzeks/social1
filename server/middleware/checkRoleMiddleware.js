const jwt = require('jsonwebtoken')

module.exports = function(role){
return function(req, res){
  if(req.method === 'OPTIONS'){}
  try{
const token = req.haeders.authorization.split( '')[1]//bearer
if(!token){
  res.status(401).json('no authorised')
}
const decoded = jwt.verify(token, process.env.SECRET_KYE)
if(decoded.role !== role){
  res.status(403).json('no access')
}
req.user = decoded
}catch(e){
    res.status(401).json('no authorised')
  }
}
}
