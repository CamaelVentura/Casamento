import Sequelize from 'sequelize';

import Guest from '../app/models/Guest';

import databaseConfig from '../config/database';

const models = [Guest];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
