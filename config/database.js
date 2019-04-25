const mongoose = require('mongoose');

const userBD = process.env.USER || 'hudson';
const passBD = process.env.PASS || 'hudbia2615';

mongoose.connect(
  `mongodb+srv://${userBD}:${passBD}@cluster0-exsan.mongodb.net/hudbox?retryWrites=true`,
  { useNewUrlParser: true },
);
