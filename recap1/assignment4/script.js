'use strict';

//Kysyn käyttäjältä arvosanat ja laskee niistä keskiarvon. Lopuksi tulostetaan keskiarvo ja arvosana, joka vastaa keskiarvoa.

const pisteet = Number(prompt('Syötä kurssipisteet (0-100):'));
let arvosana;

// Päätellään arvosana portaittain

if (pisteet >= 88 && pisteet <= 100) {
    arvosana = '5';

} else if (pisteet >= 76) {
    arvosana = '4';

} else if (pisteet >= 64) {
    arvosana = '3';
} else if (pisteet >= 52) {
    arvosana = '2';
} else if (pisteet >= 40) {
    arvosana = '1';
} else if (pisteet >= 0) {
    arvosana = '0';
} else {
    arvosana = 'Virheellinen syöte anna luku väliltä 0-100';
}


document.body.innerHTML = `
  <h1>Kurssiarvosana</h1>
  <p>Pisteet: ${pisteet}</p>
  <p>Arvosana: <strong>${arvosana}</strong></p>
`;
