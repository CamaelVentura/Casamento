import { Router } from 'express';

import GuestController from './app/controllers/GuestController';
import ConfirmController from './app/controllers/ConfirmController';

const routes = new Router();

routes.post('/convidados', GuestController.store);

routes.post('/confirmar', GuestController.show);

routes.put('/confirmar/:id', ConfirmController.update);

routes.get('/confirmados', ConfirmController.index);

module.exports = routes;
