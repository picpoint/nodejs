const data = require('./datasite/data.js');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.set('views', 'dist');


app.use('/quotes', (req, res) => {
  res.render('quotes.hbs', {
    title: 'Котировки валют',
  });
});
app.use('/', (req, res) => {
  res.send('Main Page! ');
});

console.log(data);

app.listen(4000);