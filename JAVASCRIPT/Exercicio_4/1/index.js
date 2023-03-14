const nome = prompt("Digite seu nome: ");
let cidadesVisitadas = "";
let countCidade = 0;

let resposta = prompt("Você já visitou alguma cidade? ");

while (resposta.toLowerCase() != "não" && resposta.toLowerCase() != "nao") {
  let cidade = prompt("Digite o nome da cidade?");
  cidadesVisitadas += " - " + cidade + "\n";
  countCidade++;
  resposta = prompt("Você já visitou outra cidade? ");
}

alert(
  "Seu nome é: " +
    nome +
    "\n" +
    "Você já visitou " +
    countCidade +
    " cidades\n" +
    "São elas: \n" +
    cidadesVisitadas
);
