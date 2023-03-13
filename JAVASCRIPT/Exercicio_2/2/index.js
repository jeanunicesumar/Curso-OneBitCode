const nome1 = prompt("Escreva o nome do personagem: ");
let poderDeAtaque = parseFloat(prompt("Escreva o poder de ataque: "));

const nome2 = prompt("Informe o nome do segundo personagem: ");
let pontosDeVida = parseFloat(
  prompt("Informe os pontos de vida do personagem: ")
);
let poderDeDefesa = parseFloat(
  prompt("Informe o poder de defesa do personagem: ")
);
const possuiEscudo = prompt("O personagem possui um escudo? (Sim/Não)");
let dano = 0;

if (poderDeAtaque > poderDeDefesa) {
  if (possuiEscudo.toLocaleLowerCase() == "sim") {
    dano = (poderDeAtaque - poderDeDefesa) / 2;
  } else {
    dano = poderDeAtaque - poderDeDefesa;
  }
}

pontosDeVida -= dano;
console.log(dano);

alert(
  "O personagem " +
    nome2 +
    " foi atacado!\n" +
    "Dano causado: " +
    dano +
    " pontos!\n\n" +
    "Personagem 1: \n" +
    "Nome: " +
    nome1 +
    "\n" +
    "Poder de Ataque: " +
    poderDeAtaque +
    "\n\n" +
    "Personagem 2: \n" +
    "Nome: " +
    nome2 +
    "\n" +
    "Pontos de vida: " +
    pontosDeVida +
    "\n" +
    "Poder de defesa: " +
    poderDeDefesa +
    "\n" +
    "Possui escudo: " +
    possuiEscudo
);
