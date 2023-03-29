let dnaStrand = prompt("Введіть послідовність ДНК: "); 
let complementStrand = ""; 


for (let i = 0; i < dnaStrand.length; i++) {
  switch (dnaStrand[i]) {
    case "A":
      complementStrand += "T";
      break;
    case "T":
      complementStrand += "A";
      break;
    case "C":
      complementStrand += "G";
      break;
    case "G":
      complementStrand += "C";
      break;
    default:

      console.log("Помилка: введена послідовність містить невідомі символи.");
      break;
  }
}

alert(complementStrand); 
