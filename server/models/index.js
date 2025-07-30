const dbConfig = require("../config/dbConfig.js");

const {Sequelize,DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,{
        host:dbConfig.HOST,
        port:dbConfig.port,
        dialect:dbConfig.dialect,
    }
);

sequelize.authenticate()
.then(()=>{
    console.log("connected...to data base");
})
.catch(err=>{
    console.log('Error',err);
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.TvShow = require('./tvshowsmodel.js')(sequelize, DataTypes); 
db.User = require('./usermodel.js')(sequelize, Sequelize);

db.User.hasMany(db.TvShow, { foreignKey: 'userId' });
db.TvShow.belongsTo(db.User, { foreignKey: 'userId' });



db.sequelize.sync({force:false})
.then(()=>{
    console.log("The re sync done");
})

module.exports = db;