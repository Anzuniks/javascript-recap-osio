'use strict';

//1. Kysy kayttäjältä asteet ja tallenna se muuttujaan
// HUOM! prompt() antaa aina tekstiä (string), joten Number() muuttaa sen luvuksi.

const celsiusStr = prompt('Anna lämpötila celsiusasteina:');
const celsius = Number(celsiusStr);


//2. Lasketaan uudet arvot kaavoilla.
const fahrnheit = (celsius * 9 / 5) + 32;
const kelvin = celsius + 273.15;


//3. Tulostan tulokset HTMl-sivulla.

const targetElement = document.querySelector('#target');


targetElement.innerHTML = `
<p>Syötit lämpötilan: <strong>${celsius} °C</strong></p>
<ul>
    <li> Fahrenheit: ${fahrnheit.toFixed(2)} °F </li>
    <li> Kelvin: ${kelvin.toFixed(2)} K </li>
</ul>

`;
