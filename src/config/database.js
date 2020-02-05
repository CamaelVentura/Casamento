import * as database from '../constants/database';

module.exports = {
  dialect: 'postgres',
  host: database.DB_HOST,
  username: database.DB_USER,
  password: database.DB_PASS,
  database: database.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
