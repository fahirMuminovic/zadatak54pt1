/*
Napisati funkciju koja dijeli niz u manje dijelove. Funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz.
Primjer:
Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); funkcija ce vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].
*/



function divideArray(array, divideInto) {
    if (divideInto <= array.length) {
        let matrix = [];
        let pieces = array.length / divideInto;//predstavlja od koliko nizova ce se sastojati 2D niz
        console.log(pieces);
        if (array.length / divideInto >= 2) {//kada se 2D niz moze sastojati od niza od minimalno 2 elementa
            pieces = Math.ceil(pieces);//rezultat koristenja Math.ceil je da ostatak elemenata dodajemo na kraju niza
            for (let i = 0, len = array.length; i < len; i += pieces) {
                matrix.push(array.slice(i, i + pieces));
            }
        }

        if (array.length / divideInto < 2) {//kada se 2D niz ne moze sastojati od niza od minimalno 2 elementa
            for (let i = 0, len = array.length; i < len; i += pieces) {
                matrix.push(array.slice(i, i + pieces));
            }
        }
        return matrix;
    }
    return console.log(`Niz se ne moze podijeliti na ${divideInto} dijelova\njer je duzina niza ${array.length}`);
}

let array = [1, 2, 3, 4, 5, 6, 7,8];

console.log(divideArray(array,9));