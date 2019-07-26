const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set('view engine', 'hbs');
app.set('views', 'dist');
app.use('/contact', (req, res) => {
  res.render('contact.hbs', {
    title: 'Мои контакты',
    email: 'inbox@inbox.ru',
    phone: ['+79051234567', '+79880886427', '+79280885577'],
    adress: 'Piter city'
  });
});
app.use('/', (req, res) => {
  res.send('GENERAL PAGE!');
});

/*
app.get('/index.html', (req, res) => {
	res.send('Hello Nodejs ');
});
*/

app.listen(4000);