// 1. collego html e js
console.log('JS OK');
// ### Palidroma ####
// 2. Chiedere all’utente di inserire una parola
// 3. Creare una funzione per capire se la parola inserita è palindroma
// 4. Stampiamo il risultato in console

// 2. Chiedere all’utente di inserire una parola
const parolaUtente = prompt('Inserisci una parola:', 'Amarildo');
console.log(parolaUtente);

// 3. Creare una funzione per capire se la parola inserita è palindroma

function verificaPalindromo(parola) {
    const lunghezza = parola.length;
    for (let i = 0; i < lunghezza / 2; i++) {
        if (parola[i] !== parola[lunghezza - 1 - i]) return false;
    }
    return true;
}

//VERIFICA
const risultato = verificaPalindromo(parolaUtente);
console.log(risultato);
