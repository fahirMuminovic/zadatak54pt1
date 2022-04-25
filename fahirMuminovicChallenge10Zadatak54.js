/*
Napisati program koji ispisuje ispod prikazani pattern. Program treba da pita korisnika od koliko redova se trokut sastoji. 

1  2  3  4  5
   2  3  4  5
      3  4  5
         4  5
            5
*/

function patternPrint(row) {
    let pattern = '';
    for (let i = 0; i < row; i++) { //i predstavlja kolone
        for (let j = 1; j <= row; j++) { // j predstavlja brojeve u redu (od 1 do <=row)
            if (j > i) {
                pattern += j + ' '; //sve dok je j > i ispisuj brojeve + jedan whitespace
            } else {
                pattern += '  '; //dok je j <= i ispisuj prazno mjesto (dva whitespace-a)
            }
        }
        pattern += '\n'; //na kraju row-a predji u novi red
    }
    return pattern;
}

console.log(patternPrint(9));