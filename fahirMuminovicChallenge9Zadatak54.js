/*
Napsati funkciju koja provjerava da li postoji neki element u nizu. Funkcija prima dva parametra, niz koji pretrazujemo i element koji trazimo. Funkcija radi za sve tipove podataka.
Primjer: recimo da se funkcija zove find, poziv bi izgledao ovako: find([2, 7, 5, 3, 8, 1], 5), funckija ce vratiti boolean true jer broj 5 se nalazi u nizu. NE koristiti includes() funkciju.
*/

function findInArray(array, elementToFind) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToFind) {
            return true;
        }
    }
    return false;
}


console.log(findInArray([2, 7, 5, 3, 8, 1], 5));