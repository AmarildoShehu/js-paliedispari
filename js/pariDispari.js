console.log('JS OK')
// 1. Chiediamo all'utente di scegliere tra pari o dispari e inserire un numero da 1 a 5.
// 2. Generiamo un numero casuale per il computer.
// 3. Sommiamo i due numeri.
// 4. Stabiliamo se la somma è pari o dispari.
// 5. Diciamo chi ha vinto.

//recupero elementi
const sceltaElement = document.getElementById('scelta');
const numeroElement = document.getElementById('numero');
const risultatoElement = document.getElementById('risultato');

// 2. Generiamo una funzione per generare numeri random da 1 a 5;
function generaNumeroCasuale() {
  return Math.floor(Math.random() * 5) + 1;
}