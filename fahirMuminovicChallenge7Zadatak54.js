/*
Napisati funkciju koja simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj, znak operacije i drugi broj.
Primjer:
Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) a rezultat bi bio 7. Funkcija treba da radi za: +, -, * i /.
*/

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            console.log('Pogresan unos!');
            break;
    }
}


console.log(calculator(4, '+', 3));