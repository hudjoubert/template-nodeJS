require('./config/database');
const express = require('express');
const path = require('path');
const cors = require('cors');
const route = require('./src/routes/routes');

const port = process.env.PORT || 3333;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));

app.listen(port, () => console.warn(`App is running on port ${port}!`));

app.use(route);

module.exports = app;
