let anoAtual = parseInt(2024);

const nome = prompt("Por favor, insira seu nome: ").toString();

if (nome != "") {
  alert(`Olá ${nome}! Vamos descobrir sua idade? `);
  let anoNasc = parseInt(prompt(`Insira o ano em que nasceu: `));
  let idade = parseInt(anoAtual - anoNasc);
  alert(`${nome} tem ${idade} anos.`);
} else {
  alert("Por favor, atualize a página e insira seu nome.");
}
