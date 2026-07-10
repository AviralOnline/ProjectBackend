const sequelize = require ('sequelize');
const db = new sequelize('ZomatoData', 'root', 'root',{
    host:'localHost',
    dialect: 'mysql',
});


// db.connect().then(() => {
//     console.log('Database connected successfully');
// }).catch((error) => {
//     console.error('Database connection failed:', error);
// });
module.exports = db;
