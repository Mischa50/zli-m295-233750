const fs = require('fs').promises;

function leseDateiInhalt(query) {
    return fs.readFile(query, 'utf8');
}

leseDateiInhalt('example.txt')
    .then(inhalt => {
        console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
    })
    .catch(err => {
        console.error('Fehler beim Lesen der Datei:', err);
    });
