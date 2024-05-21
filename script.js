// Função genérica para escrever texto
function escreverTexto(texto, atraso, elemento, delayInicial = 0) {
  let contadorDeLetras = 0;

  function escrever() {
    if (contadorDeLetras < texto.length) {
      elemento.textContent += texto.charAt(contadorDeLetras);
      contadorDeLetras++;
      setTimeout(escrever, atraso);
    }
  }

  setTimeout(escrever, delayInicial);
}

// Elementos e textos a serem escritos
const texto1 = "Bruno";
const elemento1 = document.querySelector(".apresentacao-title");

const texto2 = "Coelho";
const elemento2 = document.querySelector(".apresentacao-sobrenome");

const texto3 = "Minhas";
const elemento3 = document.querySelector(".apresentacao-title-h");

const texto4 = "Habilidades";
const elemento4 = document.querySelector(".apresentacao-sobrenome-h");

const texto5 = "Meus";
const elemento5 = document.querySelector(".apresentacao-title-p");

const texto6 = "Projetos";
const elemento6 = document.querySelector(".apresentacao-sobrenome-p");

// Chamadas para escrever os textos com os atrasos apropriados
escreverTexto(texto1, 150, elemento1);
escreverTexto(texto2, 150, elemento2, 1800);
escreverTexto(texto3, 150, elemento3);
escreverTexto(texto4, 150, elemento4, 1800);
escreverTexto(texto5, 150, elemento5);
escreverTexto(texto6, 150, elemento6, 1800);
