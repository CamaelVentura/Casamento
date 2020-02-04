import { Router } from 'express';

import GuestController from '../app/controllers/GuestController';
import ConfirmController from '../app/controllers/ConfirmController';

const routesPut = new Router();

routesPut.put('/convidados/:id', GuestController.update);

routesPut.put('/confirmar/:id', ConfirmController.update);

module.exports = routesPut;
