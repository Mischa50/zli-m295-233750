const express = require('express');
const weather = require('./weather.js');
const app = express();
const port = 3000;

app.get('/now', (request, response) => {
    const tz = request.query.tz || 'UTC'; 
// '/now?tz=Europe/Zurich'
    const options = {
        timeZone: tz,
        hour12: false, 
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const now = new Date().toLocaleTimeString('en-US', options);

    response.send(`Current Time in ${tz}: ${now}`);
});

app.get('/zli', (request, response) => {
    response.redirect("https://www.zli.ch/");
});

app.get('/name', (request, response) => {
    const names = [
        'JAJAJA',
        'ronaldo',
        'meessiii',
        'tomy',
        'yes',
        'emi',
        'wwwwwwwwww',
        'inainadi',
        'walter',
        'tom',
        'ryan',
        'patrick',
        'batman',
        'po',
        'dragon',
        'wert',
        'yeabdbusaj',
        'travis',
        'worf',
        'yeat'
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    response.send(`Random Name: ${randomName}`);
});


app.get('/html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/image', (req, res) => {
    res.sendFile(__dirname + '/giphy.gif');
});

app.get('/teapot', (request, response) => {
    response.sendStatus(418)
});

app.get('/user-agent', (request, response) => {
    const userAgent = request.headers["user-agent"]
    response.send(`Du nutzt: ${userAgent}`)
});

app.get('/secret', (request, response) => {
    response.sendStatus(401)
});








app.get('/:plz', (request, response) => {
    // Parameter wird hinzugefügt
    const plz = request.params.plz; // Parameter wird gespeichert
    const url = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`;

    weather(url, function (err, data) {
        if (err) {
            response.status(err).send(err);
        }
        response.send('Temperatur: ' + String(data.currentWeather.temperature));
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
