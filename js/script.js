// PASSWORD GENERATOR

// FASE 1, Chiedere Nome e cambiare titolo

var firstName = prompt('Nome');
console.log(firstName);

console.log('Welcome' + ' ' + firstName);

document.getElementById('title').innerHTML = 'Welcome' + ' ' + firstName;

document.getElementById('all').innerHTML = 'Inserisci i tuoi dati per generare una password ';





// FASE 2, Chiedere Cognome

var lastName = prompt('Cognome');
console.log(lastName);

console.log("Ultimo passaggio" + firstName);

document.getElementById('title').innerHTML = 'Ultimo passaggio' + ' ' + firstName;
document.getElementById('all').innerHTML = 'Continua, ci siamo quasi ';



// FASE 3, Chiedere colore preferito e inserire password

var color = prompt('Colore Preferito');
console.log(color);

console.log(firstName + lastName + color);



document.getElementById('all').innerHTML = 'La password generata per te è ';

document.getElementById('passw').innerHTML = firstName + lastName + color;

document.getElementById("passw").style.color = "#b0d6b0";

document.getElementById('title').innerHTML = 'Perfect!!!!!';

// document.getElementById("title").style.color = "Green";


















// 1 PROMPT CHIEDERE NOME

/*var firstName = prompt('Nome');
console.log(firstName);*/

// 2 PROMPT CHIEDERE COGNOME

/*var lastName = prompt('Cognome');
console.log(lastName);*/

// 3 PROMPT CHIEDERE ANNI

/*var age = parseInt(prompt('Quanti anni hai?')); 
console.log(age);
console.log(typeof(age));*/



/* PROMPT Metodo per ottenere informazioni dall'utente

    - Può essere assegnato direttamente alla variabile */





/* Regole Variabili

    - Keyword
    - nomeVariabile
    - assegnazione =
    - valore

    Esempio con variabile numerica*/

/*var age = 31;
console.log(age);*/ //Per visualizzare in devTools la console


    //Esempio con concatenazione di string

/*var nome = "Giuseppe";
var cognome = "Mandriani";
var all = nome + " " + cognome;
console.log(typeof(all));
console.log(all);*/





// 1 Ottenere l'elemento html by ID 
// Settarne il testo interno

//document.getElementById('title').innerHTML = 'Create a Password';