//assignment 3 script.js

const luvut = [];
let syote;


//while silmukka kysyy kunnes done

while (true) {
  syote = prompt("Anna luku (tai kirjoita 'done' lopettaaksesi):");


  if (syote == null || syote.toLowerCase() === "done") {
    break;
  }

  const nro = Number(syote);

  if (!isNaN(nro)) {
    luvut.push(nro);
  }
}


//Parilliset poiminta

const parilliset = [];

for (const luku of luvut) {
  if (luku % 2 === 0) {
    parilliset.push(luku);
  }
}


//Tulostetaan

if (parilliset.length > 0) {
  console.log("Parilliset luvut:" + parilliset.join(", "));
} else {
  console.log("Ei parillisia lukuja.");
}

console.log("Loppuu.");
