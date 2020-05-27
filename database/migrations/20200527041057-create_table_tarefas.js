'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tarefas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        texto: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        prioridade:{
          type: Sequelize.ENUM(['1','2','3']),
          defaultValue: '1'
        },
        feito:{
          type: Sequelize.BOOLEAN,
          defaultValue: 0,
          allowNull:false
        },
        usuario_id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          references: { model: 'usuarios', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
          createdAt: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        },
        updatedAt: {
          type: 'TIMESTAMP',
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
          allowNull: false
        }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tarefas');
  }
};
