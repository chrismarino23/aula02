function notebook(nome, teclado, mouse, tela) {
  this.nome = nome;
  this.teclado = teclado;
  this.mouse = mouse;
  this.tela = tela;
  this.informacoes = () => {
    console.log(this.nome.length);
    console.log(this.mouse.toUpperCase());
    console.log(this.teclado.toLowerCase());
  };
}

// const notebook1 = new notebook("ThinkPad", "RGB", "Branco", "16 Polegadas");

// notebook1.informacoes();

// const notebook = {
//   nome: "ThinkPad",
//   teclado: "Preto",
//   mouse: "Branco",
//   tela: "14 Polegadas",
// };

// for (const prop in notebook) {
//   console.log(notebook[prop]);
// }

class Notebook {
  constructor(nome, teclado, mouse, tela) {
    this.nome = nome;
    this.teclado = teclado;
    this.mouse = mouse;
    this.tela = tela;
  }
  descricao = () => {
    console.log(`Modelo do Notebook: ${this.nome}`);
  };

  trataLetras = () => {
    console.log(this.nome.length);
    console.log(this.mouse.toUpperCase());
    console.log(this.teclado.toLowerCase());
  };
}

const note1 = new Notebook("ThinkPad", "RGB", "Branco", "16 Polegadas");
const note2 = new Notebook("Lenovo", "Branco", "Verde", "14 Polegadas");

// note1.trataLetras();
note1.descricao();
// note2.trataLetras();
note2.descricao();

for (const desc in note1) {
  console.log(`${desc} = ${note1[desc]}`);
}

// for (const desc in Notebook) {
//   console.log(`${desc} = ${note2[desc]}`);
// }
