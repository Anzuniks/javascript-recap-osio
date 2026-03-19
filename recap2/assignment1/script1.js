//Luodaan fruits taulukko, ja alustetaan se.

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

//Tulostetaan taulukko konsoliin.
console.log(fruits);

//Lasketaan ja tulostetaan taulukon pituus.
console.log("Length of Fruits:", fruits.length);

//Tulostetaan taulukon index 2.
console.log("Index 2:", fruits[2]);


//Tulostetaan viimeinen elementti pituusominaisuuden avulla.
console.log("Last element:", fruits[fruits.length - 1]);


//Luodaan tyhjä taulukko vegetables.

const vegetables = [];


//for-silmukka, joka lisää kolme vihannesta vegetables-taulukkoon.

for (let i = 0; i < 3; i++) {
  const veg = prompt("Enter a vegetable:");
  vegetables.push(veg);
}

console.log("Vegetables:", vegetables);

console.log("Length of Vegetables:", vegetables.length);

