
/*Milestone 1:
Crea una funzione chiamata sommaNumeri che prenda un array di N numeri e calcoli la somma di tutti questi numeri contenuti nell'array,
 restituendolo come risultato.
Utilizzare la funzione sommaNumeri per stampare il risultato.
 L'array di N numeri da passare alla funzione lo create chiedendo all'utente quanti numeri vuole inserire (cioè N)
 , e poi facendogli inserire questi N numeri all'utente stesso tramite apposito prompt().
*/


n = parseInt(prompt("quanti numeri vuoi inserire?"));








let arrayNumeri = [];







for (let i = 0; i < n; i++) {
    let numeroUtente = parseInt(prompt("inserisci un numero"));
    arrayNumeri.push(numeroUtente)
    

}

console.log(arrayNumeri);

let sommaArray = sommaNumeri(arrayNumeri);
console.log(sommaArray);


let mediaArray = mediaNumeri(arrayNumeri);
console.log(mediaArray);









function sommaNumeri(arrayNumeri) {

    let risultato = 0

    for (let i = 0; i < arrayNumeri.length; i++) {

        risultato = risultato + arrayNumeri[i];
    }

    return risultato ;


}



/*Crea una funzione chiamata mediaAritmetica che prende in input un array di N numeri e restituisca la media 
aritmetica dei numeri contenuti nell'array.
Utilizzare la funzione sommaNumeri precedentemente creata per calcolare la media dei numeri che vanno 
chiesti all'utente attraverso dei prompt.
Potete ad esempio provare ad usare questo programma per inserire N voti di scuola e farvi restituire 
qual è la media di tutti i voti inseriti!
*/


function mediaNumeri(arrayNumeri) {

    let somma = 0

    for (let i= 0; i < arrayNumeri.length; i++) {

        somma = somma + arrayNumeri[i];

        media = somma / arrayNumeri.length;
    }

    return media ;
}

// REPOSITORY COMPLETED





















