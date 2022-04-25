/*
Napisati funkciju koja prima 2D niz, zatim ga konvertuje u 1D niz. Ovaj proces se zove: “flattening an array”, gdje se smanjuje broj dimenzija niza.
Primjer:
2D niz:
1 2 3
4 5 6
7 8 9
Funkcija nam vraca 1D niz: 1 2 3 4 5 6 7 8 9
*/

function flatten(matrix) {
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0;; j++) {
            if (matrix[i][j] === undefined) { //funkcija se prekida kada nema vise elemenata u 2D nizu
                break;
            }
            arr.push(matrix[i][j]);
        }
    }
    return arr;
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
];


console.log(flatten(matrix));

//sve to mozemo uraditi i sa metodom array.flat();
console.log(matrix.flat());