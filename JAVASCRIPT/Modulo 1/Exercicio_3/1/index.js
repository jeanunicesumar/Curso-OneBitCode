const valor = prompt("Informe um valor em metros: ");
let unidade = prompt("Para qual medida você quer converter: ");

unidade = unidade.toLocaleLowerCase();

switch (unidade) {
  case "mm":
    alert(valor * 1000 + "mm");
    break;
  case "cm":
    alert(valor * 100 + "cm");
    break;
  case "dm":
    alert(valor * 10 + "dm");
    break;
  case "dam":
    alert(valor / 10 + "dam");
    break;
  case "hm":
    alert(valor / 100 + "hm");
    break;
  case "km":
    alert(valor / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
