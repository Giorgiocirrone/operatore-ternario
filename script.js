/**
 * Esercizio 1
 * Scrivi un codice che prenda un numero come input e verfichi se è positivo 
 * o negativo utilizzando l'operatore ternario 
 */

const numero = -4;

const risutlato = numero >= 0 ? "positivo": "negativo";

console.log('il risutlato è ', risutlato);

/**
 * Esercizio 2
 * Scrivi un codice che prenda un numero come input e 
 * verifichi se è pari o dispari utilizzando 
 * l'operatore ternario 
 */

const input = 4 ; 
const verifica = input%2== 0 ? 'pari': 'dispari';

console.log(`Il numero è ${verifica}`);

/**
 * Esercizio 3 
 * Scrivi un codice che prenda una stringa come input e verifichi  
 * se è vuota o non vuota 
 * utilizzando l'operatore ternario 
 */

const stringa  = 'giorgio';

const controllo = stringa.length > 0 ? 'la stringa è piena' : 'la stringa è vuota';

console.log(`La stringa ${stringa} è ${controllo}`);

/**
 * Esercizio 4
 * Scrivi un codice che prenda il prezozo originale di un progrotto e lo sconto  
 * applicato come in input e calcoli il prezzo scontato utilizzando l'operatore ternario 
 */


const prezzoIniziale = 100; 
const sconto = 20;

const prezzoScontato = prezzoIniziale - (prezzoIniziale*sconto/100);

console.log('il prezzo scontato è: ',prezzoScontato);


/**
 * Esercizio 5
 * Scrivereun codice che prenda un numero come input e verifichi 
 * se è maggiore o minuot o uguale a zeor utiilizzando l'operatore ternario 
 * 
 */

const valoreEntrata = 14 ; 

const verificavalore =
    valoreEntrata > 0 
    ? "maggiore di zero"
    :valoreEntrata < 0 
    ?'minore di zero'
    :'uguale a zero ';

console.log('Il numero è ', verificavalore);

/**
 * Esercizio 6 
 * Scrivi un codice che prenda due numeri come input e verifichi se il primo 
 * è divisibile per il secondo numero utilizzando l'operatore ternario.
 */


const dividendo= 10; 
const  divisore = 2 ; 

const quoziente = dividendo % divisore == 0 ? 'è divisibile': 'non è divisibile';

console.log('risultato  divisizione',quoziente);


/**
 *Esercizio 7
 *Scrivere un codice che prenda in entrata un varole e verifichi che 
 sia definito o infefinito utilizzando l'operatore ternario 
 */

 let variabile ; 
 const constrolloDato = typeof variabile !== 'undefined' ? 'definita':'undefined';

 console.log('la variabile è ',constrolloDato);

 /**
  * Esercizio 8 
  * Scrivi un codice che prenda un numero e un intervallo come input
  * e verifichi se il numero è compreso nell'intervallo utilizzando l'operatore ternario 
  */

 const utente = 15 ; 
 const intervalloMinimo = 10; 
 const intervalloMassimo = 20;

 const result = 
    utente >= intervalloMinimo && utente <= intervalloMassimo
    ? 'compreso'
    :'non compreso';

console.log('il numero è ', result);

/**
 * 
 * Esercizi 9
 * Scrivi un codice che prenda una variabile come input e verifichi 
 * se è di tipo stringa o numerica utilizzando l'operatore ternario 
 */
