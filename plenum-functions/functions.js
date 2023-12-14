function addTwoNumbers(a,b){
    return a + b;
}

addTwoNumbers1(1,2)

const addTwoNumbers1 = function (a, b){
    return a + b;
}

function greifeAufDatenbankZu(query, callback) {
  setTimeout(() => {
    const ergebnis = 'Datenbankergebnis: ' + query;
    callback(ergebnis);
  }, 1000);
}

greifeAufDatenbankZu('SELECT * FROM users', function(ergebnis) {
  console.log(ergebnis);
});




