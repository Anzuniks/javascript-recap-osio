const numbers = [];

for (let i = 0; i < 5; i++) {
  const syote = prompt('Syötä luku:' + (i + 1));
  numbers.push(Number(syote));
}


console.log('Numerot: ' + numbers);

// Hakeminen includes()-metodilla
const etsiLuku = Number(prompt('Mitä lukua haluat hakea?'));
if (numbers.includes(etsiLuku)) {
 console.log(`Number ${etsiLuku} is found in the array.`);
} else {
  console.log(`Number ${etsiLuku} was not found.`);
}

//Poistetaan viimeinen pop()-metodilla
numbers.pop();
console.log("Updated Numbers", numbers);


//Lajitellaan numerot sort()-metodilla
numbers.sort((a,b) => a - b);
console.log("Sorted Numbers", numbers);

