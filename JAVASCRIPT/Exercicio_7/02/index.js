let opcao = 0;
let arrayCartas = [];
let stringCartas = "";
let nomeCarta;

do {
  for (i = 0; i < arrayCartas.length; i++) {
    stringCartas += i + 1 + "º " + arrayCartas[i] + "\n";
  }
  opcao = parseInt(
    prompt(
      "Quantidade de Cartas: " +
        arrayCartas.length +
        "\nBaralho: \n" +
        stringCartas +
        "\n\n Escolha uma opção :\n" +
        "1 - Adicionar uma carta \n" +
        "2 - Puxar uma carta \n" +
        "3 - Sair \n"
    )
  );

  switch (opcao) {
    case 1:
      nomeCarta = prompt("Informe a carta: ");
      arrayCartas.push(nomeCarta);
      alert(nomeCarta + " foi adicionado as cartas!");
      break;
    case 2:
      nomeCarta = arrayCartas.shift();
      alert(nomeCarta + " Acabou de ser retirada do baralho!");
      break;
    case 3:
      alert("Saindo");
      break;
  }
  stringCartas = "";
} while (opcao != 3);
