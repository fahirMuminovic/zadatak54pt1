/*
Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
Primjer:
Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.
*/

function minToSec(min) {
    return min * 60;
}

console.log(minToSec(2));