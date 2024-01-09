console.log('JS OK')
// 1. Chiediamo all'utente di scegliere tra pari o dispari e inserire un numero da 1 a 5.
// 2.recupero elementi
//  3. Generiamo un numero casuale per il computer.
// 4. Sommiamo i due numeri.
// 5. Stabiliamo se la somma è pari o dispari.
// 6. Diciamo chi ha vinto.


//recupero elementi
const gameForm = document.getElementById('gameForm');
const risultatoElement = document.getElementById('risultato');

// 2. scelte utente
function ottieniNumeroUtente() {
  const numeroUtente = parseInt(document.getElementById('numero').value);
  return numeroUtente;
}

function ottieniSceltaUtente() {
  return document.getElementById('scelta').value;
}

//  3. Generiamo un numero casuale per il computer.
function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}

// 4. Sommiamo i due numeri.
function calcolaRisultato() {
  const numeroUtente = ottieniNumeroUtente();

  const sceltaUtente = ottieniSceltaUtente();
  const numeroComputer = generaNumeroCasuale();
  const somma = numeroUtente + numeroComputer;

  // 5. Stabiliamo se la somma è pari o dispari.
  const risultato = somma % 2 === 0 ? 'pari' : 'dispari';
  const esito = (risultato === sceltaUtente) ? 'Hai vinto!' : 'Mi dispiace, hai perso!';

  risultatoElement.textContent = `${esito} La somma (${numeroUtente} + ${numeroComputer}) è ${risultato}.`;
}

// 6. Diciamo chi ha vinto.
gameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  calcolaRisultato();
});