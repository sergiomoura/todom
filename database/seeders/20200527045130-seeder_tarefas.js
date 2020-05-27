'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'tarefas', 
        [
          {
            texto: 'Pagar escola',
            prioridade: 1,
            feito: 1,
            usuario_id:1
          },
          {
            texto: 'Preparar aula',
            prioridade: 1,
            feito: 0,
            usuario_id:1
          },
          {
            texto: 'Ir para aula de Ioga',
            prioridade: 2,
            feito: 1,
            usuario_id:1
          },
          {
            texto: 'Escovar os dentes',
            prioridade: 3,
            feito: 1,
            usuario_id:2
          }
        ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tarefas', null, {});
  }
};
