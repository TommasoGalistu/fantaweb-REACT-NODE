const User = require('./userModel');
const Championship = require('./championshipModel');

// Associazione molti-a-molti: Championship ↔ User
User.belongsToMany(Championship, {
  through: 'ChampionshipPlayers',
  foreignKey: 'userId',
  otherKey: 'championshipId'
});

Championship.belongsToMany(User, {
  through: 'ChampionshipPlayers',
  foreignKey: 'championshipId',
  otherKey: 'userId'
});

Championship.belongsTo(User, {
  foreignKey: 'id_admin',
  as: 'admin'
});


// Esporta per usarlo nel setup
module.exports = {
  User,
  Championship
};
