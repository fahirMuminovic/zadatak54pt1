/*
Napisati funkciju koja prima neogranicen broj argumenata number tipa podataka te vraca najveci broj. Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
Primjer:
Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a funkcija vraca 12.
*/
function max(num1, num2, ...numN) {
    let testForMaxValue = 0;
    let maxNumber = 0;
    for (let i = 0; i < numN.length; i++) {
        if (numN[i] > testForMaxValue) {
            testForMaxValue = numN[i];
        }
    }
    testForMaxValue < num1 ? maxNumber = num1 : testForMaxValue < num2 ? maxNumber = num2 : maxNumber = testForMaxValue;
    return maxNumber;
}


console.log(max(2, 7, 4, 6, 9, 12, 5));