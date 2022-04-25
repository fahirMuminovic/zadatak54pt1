/*
Napisati funkciju koja racuna koliko kilometara neko auto moze preci na osnovu nivoa goriva u rezervaru. Funkcija prima 2 parametra, nivo goriva u rezervaru u litrima, i potrosnju auta tj koliko litara auto trosi na 100 km.
Primjer:
Ako je nivo rezervara 20 litara a auto trosi 10 litara na 100 km to znaci da ce auto moci preci 200 km sa gorivom u rezervaru.
*/
function carRange(levelOfFuel, consumption) {
    let range = 0;
    range = (levelOfFuel / consumption) * 100;
    range = Math.round(range * 100) / 100; //ukoliko je unos potrosnje float zaokruzit cemo rezultat na dvije decimale
    return range;
}

console.log(carRange(20, 10));