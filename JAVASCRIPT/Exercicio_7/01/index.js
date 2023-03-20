let opcao = 0;
let fila = [];

let nome;

do {
  let pacientes = "";
  for (i = 0; i < fila.length; i++) {
    pacientes += i + 1 + "º " + fila[i] + "\n";
  }
  opcao = parseInt(
    prompt(
      "Pacientes na fila: " +
        fila.length +
        "\nLista de pacientes: \n" +
        pacientes +
        "\n\n Escolha uma opção :\n" +
        "1 - Novo paciente \n" +
        "2 - Consultar paciente \n" +
        "3 - Sair \n"
    )
  );

  switch (opcao) {
    case 1:
      nome = prompt("Informe o nome do novo paciente: ");
      fila.push(nome);
      alert(nome + " foi adicionado a fila de espera!");
      break;
    case 2:
      nome = fila.shift();
      alert(nome + " acabou de ser consultado!");
      break;
    case 3:
      alert("Saindo");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao != 3);
