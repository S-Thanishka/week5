// Importing express module
const express = require('express');
const app = express();

app.use(express.json());

app.get('/',
	(req, res) => {
		res.sendFile(__dirname + '/index.html');
	});

app.get('/login',
	(req, res) => {
		res.sendFile(__dirname + '/login.html');
	});
app.get('/registration',
	(req, res) => {
		res.sendFile(__dirname + '/registration.html');
	});
app.get('/welcome',
	(req, res) => {
		res.sendFile(__dirname + '/welcome.html');
	});
app.post('/',(req, res) => {
		res.redirect("/")
		});
app.post('/login',(req, res) => {
	res.redirect("/login")
	});
app.post('/register',(req, res) => {
        res.redirect("/registration")
        });
app.post('/welcome',(req, res) => {
	res.redirect("/welcome")
	});

app.listen(3000,
	() => {
		console.log(
			'http://localhost:3000'
		);
	});