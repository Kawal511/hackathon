const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

app.get('/', (req, res) => res.json({ ok: true, message: 'Water Management API' }));

app.use(errorHandler);

module.exports = app;
