import { Router } from 'express';

import ConfirmController from '../app/controllers/ConfirmController';

const routesGet = new Router();

routesGet.get('/confirmados', ConfirmController.index);

module.exports = routesGet;
