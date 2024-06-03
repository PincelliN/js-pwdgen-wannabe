// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito
//Infine scrivi sulla pagina nomecognomecolorepreferito23
//Output:
//partite da un semplice log in console,
//ma poi scrivetelo in pagina
//e se volete aggiungete un pò di CSS per rednerlo più carino

// chiedo al utente il suo Nome
let userName = prompt("iserisci il tuo Nome");

console.log(userName);
// chiedo al utente il suo Cognome
let userLastName = prompt("inserisci il tuo cognome");

console.log(userLastName);
// chiedi al utente il colore preferito
let userColor = prompt("inserisci il tuo colore preferito in inglese");

console.log(userColor);
// risultato della somma delle diverse variabili
let result = `${userName}${userLastName}${userColor}23`;

console.log(result);
//stampo il risultato in html
document.getElementById("pass").innerHTML = result;
// cambio il colore del risultato
document.getElementById("pass").style.color = userColor;


