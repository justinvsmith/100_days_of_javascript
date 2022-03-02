const express = require('express');
var path = require('path');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const PORT = 3000;

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});


app.get('/ajax.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/ajax.js'));
});

app.get('/fetch.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/fetch.js'));
});

app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '/styles.css'));
});

app.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
})
