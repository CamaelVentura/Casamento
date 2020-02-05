import express from 'express';

import confirmados from './routes/confirmados';
import confirmar from './routes/confirmar';
import convidados from './routes/convidados';

const app = express();

app.use('/confirmados', confirmados);
app.use('/confirmar', confirmar);
app.use('/convidados', convidados);

module.exports = app;
