module.exports = (sequelize, Sequelize) => {
  const gamesession = sequelize.define(
    'gamesessions',
    {
      gameid: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        primaryKey: true
      },
      gameState: {
        type: Sequelize.TEXT('long'),
        allowNull: false
      },
      currentBlackCard: {
        type: Sequelize.INTEGER(11)
      }
    },
    {
      updatedAt: false
    }
  );

  gamesession.associate = (models) => {
    gamesession.belongsTo(models.user, {
      as: 'Host',
      through: 'hostTable'
    });

    gamesession.belongsToMany(models.user, {
      as: 'Player',
      through: 'playerTable'
    });
  };

  return gamesession;
};
