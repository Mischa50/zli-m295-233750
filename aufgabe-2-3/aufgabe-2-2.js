function simuliereVerzoegerung(ms, query) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const ergebnis = 'Ergebnis ' + query + ' nach ' + ( ms / 1000) + ' Sekunden';
        resolve(ergebnis);
      }, ms);
    });
  }
  
  async function addiereNachVerzoegerung(a, b, ms) {
    try {
      const ergebnis = await simuliereVerzoegerung(ms, a + b);
      console.log(ergebnis);
    } catch (err) {
      console.error('Fehler beim Datenbankzugriff:', err);
    }
  }
  addiereNachVerzoegerung(3, 7, 2000);
  