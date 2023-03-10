let nome = window.prompt("Informe seu nome: ");
let sobrenome = window.prompt("Informe seu sobrenome: ");
let campo = window.prompt("Informe seu campo de estudo: ");
let anoNascimento = parseInt(window.prompt("Informe seu ano de nascimento: "));

let idade = 2023 - anoNascimento;

alert(
  "Nome completo: " +
    nome +
    " " +
    sobrenome +
    "\n" +
    "Campo de estudo: " +
    campo +
    "\n" +
    "Idade: " +
    idade
);
