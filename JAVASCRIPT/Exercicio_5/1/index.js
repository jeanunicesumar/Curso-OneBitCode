let opcao;

do {
  opcao = prompt(
    "Escolha um opção no menu: \n" +
      "1 - Iniciar \n" +
      "2 - Mostrar tarefas \n" +
      "3 - Incluir tarefas \n" +
      "4 - Excluir tarefas \n" +
      "5 - Encerrar \n"
  );
  switch (opcao) {
    case "1":
      alert("Iniciar");
      break;
    case "2":
      alert("Mostrar tarefas");
      break;
    case "3":
      alert("Incluir tarefas");
      break;
    case "4":
      alert("Excluir tarefas");
      break;
    case "5":
      alert("Sistema está sendo encerrado");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "5");
