
//exporting sequelize module
const Sequelize = require('sequelize');
const sequelize = new Sequelize('your-database', 'your-user', 'your-pass', {
  host: 'your-host',
  dialect: 'mysql' /*mysql is the dialect default but you can change it installing 
  the corresponding driver */
});

sequelize.authenticate().then(() => {
  console.log('Database connected successfully!');
}).catch((error) => {
  console.log('Error on database connection: ' + error);
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
}


