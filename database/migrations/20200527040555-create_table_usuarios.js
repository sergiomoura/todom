'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'usuarios',
      {
        id:{
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey:true
        },
        email:{
          type: Sequelize.STRING,
          allowNull: false
        },
        senha:{
          type: Sequelize.STRING(256),
          allowNull: false
        }

      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  }
};
