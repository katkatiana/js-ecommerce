// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let utenteCheEffettuaLAcquisto = marco; //cambia il valore qui per provare se il tuo algoritmo funziona!
let totalBasket = 0; //creo una variabile che contenga il carrello totale (spedizione + prodotti)
let basket = 0; //variabile che contiene solo il costo totale dei prodotti

for (x = 0; x < prices.length; x++) { //ciclo per selezionare ogni elemento dell'array per sommarli tra loro (line 44) conservando il risultato nella variabile basket
  basket += prices[x];
}
console.log("Somma del costo prodotti del carrello: " + basket); //basket qui contiene la somma degli elementi del carrello

if (utenteCheEffettuaLAcquisto.isAmbassador) { //blocco if per controllare se l'utente è ambassador
  basket = basket - basket * 0.3; //se ambassador, qui applicato sconto del 30% sui prodotti del carrello
}

if (basket > 100) { //if per verificare se totale carrello > 100
  totalBasket = basket; //se vero, non si aggiungeranno spese di spedizione
} else {
  totalBasket = basket + shippingCost; //altrimenti sì
}
console.log("Totale carrello inclusa spedizione: " + totalBasket);

let usersArray = []; //dichiarazione di un array che conterrà gli oggetti-utente
usersArray.push(marco, paul, amy); //aggiunta dei singoli utenti
console.log("Utenti presenti nel sistema: ", usersArray);
let ambassadorsArray = [] //dichiarazione di un array che conterrà gli oggetti-utente ambassadors

for (i = 0; i < usersArray.length; i++) { //ciclo per ciascun elemento dell'array usersArray
  if (usersArray[i].isAmbassador) { //blocco if per verificare per ogni utente dell'array se è o meno ambassador
    console.log(usersArray[i].name, usersArray[i].lastName, "is Ambassador"); //stampa nome, cognome dell'utente dichiarandolo ambassador
    ambassadorsArray.push(usersArray[i]) //inserisce l'elemento nel secondo array
  } else { //altrimenti stamperà nome e cognome dell'utente dichiarandolo non ambassador
    console.log(
      usersArray[i].name,
      usersArray[i].lastName,
      "is not Ambassador"
    );
  }
}
console.log("Gli utenti ambassador presenti nel sistema sono: " , ambassadorsArray)

