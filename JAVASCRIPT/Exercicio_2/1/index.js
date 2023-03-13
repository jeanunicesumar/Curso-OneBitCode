const nome1 = prompt("Informe o nome do primeiro veículo: ");
const velocidade1 = parseFloat(
  prompt("Informe a velocidade do primeiro veículo: ")
);

const nome2 = prompt("Informe o nome do segundo veículo: ");
const velocidade2 = parseFloat(
  prompt("Informe a velocidade do segundo veículo: ")
);

if (velocidade1 > velocidade2) {
  alert(nome1 + " é mais rápido.");
  exit();
}

if (velocidade2 > velocidade1) {
  alert(nome2 + " é mais rápido.");
  exit();
}

alert("Os dois possuem a mesma velocidade!");
