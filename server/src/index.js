const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multpart = require('connect-multiparty');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// const multipartMiddleware = multpart({ uploadDir: './uploads' });
app.post('/upload', (req, res) => {
	const files = req.body;
	res.json({ message: files })
});

app.use((err, req, res, next) => res.json({error: err.message}))

app.listen(5000, () => {
	console.log('Servidor porta 5000');
})
