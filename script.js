const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.get('/:lin', (req, res) => {
	res.send('Hello Nodejs ' + req.params.lin);
});

app.listen(4000);