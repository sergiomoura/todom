'use strict';

const bcrypt = require("bcrypt");

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert(
        'usuarios', [
          {
            email: 'teste1@teste.com',
            senha: bcrypt.hashSync('123456',10)
          },
          {
            email: 'teste2@teste.com',
            senha: bcrypt.hashSync('123456',10)
          }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('usuarios', null, {});
  }
};
