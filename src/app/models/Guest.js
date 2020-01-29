import Sequelize, { Model } from 'sequelize';

class Guest extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        expected_adults: Sequelize.INTEGER,
        expected_kids: Sequelize.INTEGER,
        confirmed_adults: Sequelize.INTEGER,
        confirmed_kids: Sequelize.INTEGER,
        confirmed: Sequelize.BOOLEAN
      },
      {
        sequelize
      }
    );

    return this;
  }
}

export default Guest;
