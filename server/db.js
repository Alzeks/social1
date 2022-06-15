const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
//const sequelize = new Sequelize(
process.env.DB_NAME,
process.env.DB_USER,
process.env.DB_PASSWORD,
{
  dialect: 'postgres',
  host: process.env.BD_HOST,
  port: process.env.BD_PORT
}
)
// sequelize
//   .authenticate()
//   .then(() => console.log('Connected.'))
//   .catch((err) => console.error('Connection error: ', err))
