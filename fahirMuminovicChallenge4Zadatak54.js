/*
Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
Primjer:
Ako funkciji proslijedimo - 20 vratit ce nam 20.
*/

function absolute(num) {
    let absoluteValue = 0;
    num >= 0 ? absoluteValue = num : absoluteValue = (num * (-1));
    return absoluteValue;
}

console.log(absolute(-20));