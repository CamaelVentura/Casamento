module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('guests', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      expected_adults: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      expected_kids: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      confirmed_adults: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      confirmed_kids: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      confirmed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('guests');
  }
};
