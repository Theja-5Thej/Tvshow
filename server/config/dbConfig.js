require('dotenv').config();

module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DB: process.env.DB_NAME,
    dialect: 'mysql',
    port: 3306,
     dialectOptions: {
    ssl: {
      rejectUnauthorized: true // required by PlanetScale
    }
  }
}