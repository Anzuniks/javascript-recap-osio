'use strict';

// Kysyn sivuje pituudet ja muutetaan ne numeroiks


const sivuA = Number(prompt("Anna sivu 1. pituus:"));
const sivuB = Number(prompt("Anna sivu 2. pituus:"));
const sivuC = Number(prompt("Anna sivu 3. pituus:"));

//muuttuja, johon tallennetaan kolmion tyyppi

// eslint-disable-next-line no-useless-assignment
let tyyppi = '';

//Päätellään kolmion tyyppi (Järjestys on tärkeä!)
if (sivuA === sivuB && sivuB === sivuC) {
    // Kolmio on tasasivuinen

  tyyppi = 'tasasivuinen';
} else if (sivuA === sivuB || sivuB === sivuC || sivuA === sivuC) {
  // vähintään kaksi sivua ovat yhtä pitkiä, joten kolmio on tasakylkinen
  tyyppi = 'tasakylkinen';
} else {
    // kaikki sivut ovat eripituisia, joten kolmio on erisivuinen
  tyyppi = 'epäsäänöllinen';
}

// Tulostus sivulle

document.querySelector("#vastaus").innerHTML = `
Sivujen pituudet: ${sivuA}, ${sivuB}, ${sivuC}<br>
<p>Tämä on <strong>${tyyppi}</strong>.</p>
`;
