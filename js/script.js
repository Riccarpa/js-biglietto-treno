/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// km and age
var km = parseInt(prompt("numero di chilometri che vuole percorrere"));
var age = parseInt(prompt("età del passeggero"));

// age&km control

if (isNaN(km) || isNaN(age)) {
    alert('non hai inserito due numeri');
    window.location.reload(); //! NON SI FA
}
if ((km < 0) || (age < 0)) {
    alert('hai inserito numeri negativi');
    window.location.reload(); //! NON SI FA
}

//tariff
var priceKm = 0.21;
console.log(typeof priceKm);
var fullPrice = km * priceKm;

//discount
var d20 = fullPrice / 100 * 20;
var discount20 = d20.toFixed(2);
var d40 = fullPrice / 100 * 40;
var discount40 = d40.toFixed(2);

//final prices
var minors = fullPrice - discount20;
var finalPriceU18 = minors.toFixed(2);

var eldest = fullPrice - discount40;
var finalPriceO65 = eldest.toFixed(2);

// ticket html link
var ticket = document.getElementById("ticket");
var discount = document.getElementById("discount");
var tot = document.getElementById("tot");

// age recognition
if (age < 18) {
    ticket.innerHTML = "Il prezzo intero è:" + " " + fullPrice + " " +
        "€";
    discount.innerHTML = "Lo sconto è:" + " " + discount20 + " " +
        "€";
    tot.innerHTML = "Il prezzo finale è:" + " " + finalPriceU18 + " " +
        "€";

} else if (age >= 65) {
    ticket.innerHTML = "Il prezzo è:" + " " + fullPrice + " " +
        "€";
    discount.innerHTML = "Lo sconto è:" + " " + discount40 + " " +
        "€";
    tot.innerHTML = "Il prezzo finale è:" + " " + finalPriceO65 + " " +
        "€";

} else {
    ticket.innerHTML = "Il prezzo è:" + " " + fullPrice + " " +
        "€";
    discount.innerHTML = "Lo sconto è:" + " " + "0" + " " +
        "€";
    tot.innerHTML = "Il prezzo finale è:" + " " + fullPrice + " " +
        "€";

}