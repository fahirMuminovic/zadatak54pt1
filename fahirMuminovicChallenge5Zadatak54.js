/*
Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. Rekurzivna funkcija je funkcija koja poziva samu sebe.
*/
function factorial(num) {
    if (num === 1) {
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));