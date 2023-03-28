let opcao;
let area;

function areaQuadrado(lado) {
  return lado * lado;
}

function areaTriangulo(base, altura) {
  return base, altura / 2;
}

function areaRetângulo(base, altura) {
  return base * altura;
}
function areaTrapezio(baseMenor, baseMaior, altura) {
  return ((baseMenor + baseMaior) * altura) / 2;
}

function areaCirculo(raio) {
  return 3.14 * (raio * raio);
}

do {
  opcao = parseInt(
    window.prompt(
      "Calculadora Geométrica!\n" +
        "Escolha uma opção: \n" +
        "1 - Área do Triângulo\n" +
        "2 - Área do Retângulo\n" +
        "3 - Área do Quadrado\n" +
        "4 - Área do Trapézio\n" +
        "5 - Área do Círculo\n" +
        "6 - Sair\n"
    )
  );
  switch (opcao) {
    case 1:
      area = areaRetângulo(
        parseFloat(prompt("Informe a base: ")),
        parseFloat(prompt("Informe a altura: "))
      );
      alert("A área do triângulo é " + area);
      break;
    case 2:
      area = areaTriangulo(
        parseFloat(prompt("Informe a base: ")),
        parseFloat(prompt("Informe a altura: "))
      );
      alert("A área do retângulo é " + area);
      break;
    case 3:
      area = areaQuadrado(parseFloat(prompt("Informe o lado: ")));
      alert("A área do quadrado é " + area);
      break;
    case 4:
      area = areaTrapezio(
        parseFloat(prompt("Informe a base menor: ")),
        parseFloat(prompt("Informe a base maior: ")),
        parseFloat(prompt("Informe a altura: "))
      );
      alert("A área do trapézio é " + area);
      break;
    case 5:
      area = areaCirculo(parseFloat(prompt("Informe o raio: ")));
      alert("A área do círculo é " + area);
      break;
    case 6:
      alert("Saindo!");
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao != 6);
