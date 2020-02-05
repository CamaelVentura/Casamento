import { Router } from 'express';

import { index } from '../app/controllers/ConfirmController';

const routes = new Router();

routes.get('/', index);

module.exports = routes;
