let nome = "Jean";

console.log(nome);
console.error(nome);
console.warn(nome);

window.alert(nome);
nome = window.prompt("Insira o seu nome: ");

let confirm_action = window.confirm("Você confirma essa ação? ");

console.log(nome);

if (confirm_action) {
  window.close();
}
