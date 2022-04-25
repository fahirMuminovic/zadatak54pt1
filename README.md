# zadatak54pt1
BILD IT Zadatak 54

1. Napisati funkciju koja prima broj minuta, a zatim vraca koliko je to u sekundama. Funkcija prima cijele kao i decimalne brojeve.
Primjer:
Funkciji proslijedimo 1,5 za broj minuta i funkcija nam vraca 90 sekundi.


2. Napisati funkciju koja prima neogranicen broj argumenata number tipa podataka te vraca najveci broj. Funkcija najmanje mora imati 2 parametra, ali nema gornje granice.
Primjer:
Ako se funkcija zove max, poziv bi izgledao ovako: max(2, 7, 4, 6, 9, 12, 5) a funkcija vraca 12.


3. Napisati funkciju koja racuna koliko kilometara neko auto moze preci na osnovu nivoa goriva u rezervaru. Funkcija prima 2 parametra, nivo goriva u rezervaru u litrima, i potrosnju auta tj koliko litara auto trosi na 100 km.
Primjer:
Ako je nivo rezervara 20 litara a auto trosi 10 litara na 100 km to znaci da ce auto moci preci 200 km sa gorivom u rezervaru.


4. Napisati funkciju koja vraca apsolutnu vrijednost nekog broja. NE Koristiti Math.abs().
Primjer:
Ako funkciji proslijedimo - 20 vratit ce nam 20.


5. Napisati rekurzivnu funkciju koja racuna faktorijel nekog broja. Primjer faktorijela broja 5 je: 5 * 4 * 3 * 2 * 1 = 120. Rekurzivna funkcija je funkcija koja poziva samu sebe.


6. Napisati funkciju koja prima 2D niz, zatim ga konvertuje u 1D niz. Ovaj proces se zove: “flattening an array”, gdje se smanjuje broj dimenzija niza.
Primjer:
2D niz:
1 2 3
4 5 6
7 8 9
Funkcija nam vraca 1D niz: 1 2 3 4 5 6 7 8 9


7. Napisati funkciju koja se simulira jednostavan kalkulator. Funkcija prima 3 argumenta, jedan broj, znak operacije i drugi broj.
Primjer:
Recimo da se funkcija zove calc, poziv funkcije bi izgledao ovako: calc(3, ‘+’, 4) a rezultat bi bio 7. Funkcija treba da radi za: +, -, * i /.


8. Napisati funkciju koja dijeli niz u manje dijelove. Funkcija treba da prima dva argumenta, niz i broj u koliko dijelova trebamo podijeliti taj niz.
Primjer:
Recimo da se funkcija zove divide, poziv funkcije bi bio divide([1, 2, 3, 4, 5, 6, 7], 3); funkcija ce vratiti 2D niz koji izgleda ovako: [ [1, 2, 3 ], [4, 5, 6], [7] ].


9. Napsati funkciju koja provjerava da li postoji neki element u nizu. Funkcija prima dva parametra, niz koji pretrazujemo i element koji trazimo. Funkcija radi za sve tipove podataka.
Primjer: recimo da se funkcija zove find, poziv bi izgledao ovako: find([2, 7, 5, 3, 8, 1], 5), funckija ce vratiti boolean true jer broj 5 se nalazi u nizu. NE koristiti includes() funkciju.

10. Napisati program koji ispisuje ispod prikazani pattern. Program treba da pita korisnika od koliko redova se trokut sastoji. 
12345
 2345
  345
   45
    5
