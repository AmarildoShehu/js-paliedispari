// 1. collego html e js
console.log('JS OK');
// ### Palidroma ####
// 2. Chiedere all’utente di inserire una parola
// 3. Creare una funzione per capire se la parola inserita è palindroma
// 4. Stampiamo il risultato in console
/*
// 2. Chiedere all’utente di inserire una parola
const parolaUtente = prompt('Inserisci una parola:', 'Amarildo');
console.log(parolaUtente);

// 3. Creare una funzione per capire se la parola inserita è palindroma

function verificaPalindromo(parola) {
    const isPalindromo = parola.split('').reverse().join('') === parola;
    return isPalindromo;
}


//VERIFICA
const risultato = verificaPalindromo(parolaUtente);
console.log(risultato);
*/

// || Elementi in pagina

// ### Palidroma ####
// 1. prendo tutti gli elementi
// 2. Creare una funzione per capire se la parola inserita è palindroma
// 3. Chiedere all’utente di inserire una parola
// 4. Stampiamo il risultato al click

// 1. prendo tutti gli elementi
const inputParola = document.getElementById('inputParola');
const verificaButton = document.getElementById('verificaButton');
const risultatoElement = document.getElementById('risultato');

// 2. Creare una funzione per capire se la parola inserita è palindroma
function verificaPalindromo(parola) {
    const isPalindromo = parola.split('').reverse().join('') === parola;
    return isPalindromo;
}

// 4. Stampiamo il risultato al click
verificaButton.addEventListener('click', function() {
    const parola = inputParola.value;
    const isPalindromo = verificaPalindromo(parola);
  
    // Visualizza il risultato sulla pagina HTML
    risultatoElement.textContent = 'La parola "' + parola + '" ' + (isPalindromo ? 'è palindroma.' : 'non è palindroma.');
  
    // Visualizza il risultato anche in console
    console.log('La parola "' + parola + '" è palindroma? ' + (isPalindromo ? 'Sì' : 'No'));
  });