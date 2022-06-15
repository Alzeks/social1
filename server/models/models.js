const sequelize = require('../db')
const {DataTypes}=require('sequelize')

const Auth = sequelize.define('auth', {
id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
phone: {type: DataTypes.INTEGER, unique: true, allowNull: false},
password: {type: DataTypes.STRING, allowNull: false},
//name: {type: DataTypes.STRING, allowNull: false},
})

const Users = sequelize.define('users', {
 id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
 name: {type: DataTypes.STRING, allowNull: false},
 phone: {type: DataTypes.INTEGER, unique: true, allowNull: false},
 img: {type: DataTypes.STRING, allowNull: true},
})

const Chat = sequelize.define('chat', {
id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
oneId: {type: DataTypes.INTEGER,  allowNull: false},
twoId: {type: DataTypes.INTEGER, allowNull: false},
oneName: {type: DataTypes.STRING, allowNull: true},
oneImg: {type: DataTypes.STRING, allowNull: true},
twoName: {type: DataTypes.STRING, allowNull: true},
twoImg: {type: DataTypes.STRING, allowNull: true},
})

const Messages = sequelize.define('messages', {
id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
typeMessage: {type: DataTypes.INTEGER, allowNull: true},
message: {type: DataTypes.STRING, allowNull: true},
})
//

Auth.hasOne(Users)
Users.belongsTo(Auth)

Chat.hasMany(Messages)
Messages.belongsTo(Chat)

module.exports = {
Auth, Users, Chat, Messages
}
