let dinheiro = parseFloat(prompt("Dinheiro disponível: R$"));
let opcao;

do {
  opcao = prompt(
    "Dinheiro disponível: R$" +
      dinheiro +
      "\n1 - Adicionar dinheiro" +
      "\n2 - Remover dinheiro" +
      "\n3 - Sair"
  );

  switch (opcao) {
    case "1":
      dinheiro += parseFloat(prompt("Digite o valor a ser adicionado: R$"));
      break;
    case "2":
      dinheiro -= parseFloat(prompt("Digite o valor a ser diminuido: R$"));
      break;
    case "3":
      alert("Saindo da aplicação!");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3");
