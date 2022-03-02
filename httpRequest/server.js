var express = require('express');
var path = require('path');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const PORT = 3000;

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/users.json', (req, res) => {
    res.sendFile(path.join(__dirname, '/users.json'));
});

app.get('/ajax.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/ajax.js'));
});

app.get('/fetch.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/fetch.js'));
});

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
})
