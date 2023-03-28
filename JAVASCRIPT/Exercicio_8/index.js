let opcao;
let listaImoveis = [];

do {
  let listaStringImoveis = "";
  opcao = parseInt(
    window.prompt(
      "Cadastro de imóveis!\n" +
        "Quantidade de imóveis cadastrados: " +
        listaImoveis.length +
        "\n\n Escolha uma opção: " +
        "\n 1 - Salvar imóvel" +
        "\n 2 - Listar imóveis" +
        "\n 3 - Sair"
    )
  );

  switch (opcao) {
    case 1:
      alert("Salvar um novo imóvel!");
      let nome = window.prompt("Informe o nome do proprietário: ");
      let qtdeQuartos = parseInt(
        window.prompt("Informe a quantidade de quartos: ")
      );
      let qtdeBanheiro = parseInt(
        window.prompt("Informe a quantidade de banheiros: ")
      );
      let possuiGaragem = window.prompt("Possui garagem: ");
      listaImoveis.push([nome, qtdeQuartos, qtdeBanheiro, possuiGaragem]);
      break;
    case 2:
      for (let i = 0; i < listaImoveis.length; i++) {
        listaStringImoveis +=
          "Imovel: " +
          (i + 1) +
          " - Nome: " +
          listaImoveis[i][0] +
          " - Quantidade de quartos: " +
          listaImoveis[i][1] +
          " - Quantidade de banheiros: " +
          listaImoveis[i][2] +
          " - Possui Garagem: " +
          listaImoveis[i][3];
      }
      alert("Lista de imóveis\n" + listaStringImoveis);
      break;
    case 3:
      alert("Saindo!");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != 3);
