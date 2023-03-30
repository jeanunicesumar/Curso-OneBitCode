const word = prompt("Digite uma palavra: ");
let wordInverted = "";

for (let i = word.length - 1; i >= 0; i--) {
  wordInverted += word[i];
}

if (word.toLowerCase() == wordInverted.toLowerCase()) {
  alert(word + " é um palíndromo!");
} else {
  alert(
    word +
      " não é um palíndromo \n" +
      "Palavra: " +
      word +
      "\n" +
      "Palavra invertida: " +
      wordInverted
  );
}
