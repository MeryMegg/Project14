const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const routerCards = require('./routes/cards');
const routerUsers = require('./routes/users');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', routerUsers);
app.use('/cards', routerCards);

app.use('/', (req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
