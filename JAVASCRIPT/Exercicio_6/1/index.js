let numero = parseInt(prompt("Digite um número inteiro: "));
let resultado = "";

alert("Aguarde, estamos calculando a tabuada desse número!");

for (let i = 1; i < 21; i++) {
  resultado += numero + " * " + i + " = " + numero * i + "\n";
}

alert("A tabuada de " + numero + " é: \n" + resultado);
