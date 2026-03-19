'use strict';

// Kysyn neljää koordinaattia (x1, y1, x2, y2)

const x1  = Number(prompt('Anna ensimmäisen pisteen x-koordinaatti:'));
const y1  = Number(prompt('Anna ensimmäisen pisteen y-koordinaatti:'));
const x2  = Number(prompt('Anna toisen pisteen x-koordinaatti:'));
const y2  = Number(prompt('Anna toisen pisteen y-koordinaatti:'));

//Lasketaan etäisyys kaavalla
// Kaava: sqrt((x2-x1)^2 + (y2-y1)^2)
// JavaScriptissä potenssi merkitään ** 2

const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

//Tulostetaan tulos sivulla

const resultDiv = document.querySelector('#result');

resultDiv.innerHTML = `
<p>Ensimmäinen piste: (${x1}, ${y1})</p>
<p>Toinen piste: (${x2}, ${y2})</p>
<p>Etäisyys pisteiden välillä: <strong>${distance.toFixed(2)}</strong></p>
`; 
