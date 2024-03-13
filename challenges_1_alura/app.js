function alternarVisibilidade(id) {
  var elemento = document.getElementById(id);
  if (
    elemento.style.visibility === "hidden" ||
    elemento.style.visibility === ""
  ) {
    elemento.style.visibility = "visible";
  } else {
    elemento.style.visibility = "hidden";
  }
}

function criptografar() {
  var entradaTexto = document.getElementById("text").value.toLowerCase();
  var saidaTexto = document.getElementById("myIMG2");
  var botaoCopiar = document.getElementById("copiarBotao");

  // Limpar a mensagem anterior e mostrar o botão de copiar
  saidaTexto.innerHTML = "";
  botaoCopiar.style.visibility = "visible";

  if (!entradaTexto.match(/^[a-z]+$/)) {
    // Exibir mensagem de alerta se houver caracteres inválidos
    saidaTexto.innerHTML =
      /*<h2 class='saida-h2'>Erro!</h2>*/ "<p class='saida-p'>Apenas letras minúsculas e sem acento são permitidas.</p>";
    return;
  }

  var resultado = "";
  for (var i = 0; i < entradaTexto.length; i++) {
    switch (entradaTexto[i]) {
      case "e":
        resultado += "enter";
        break;
      case "i":
        resultado += "imes";
        break;
      case "a":
        resultado += "ai";
        break;
      case "o":
        resultado += "ober";
        break;
      case "u":
        resultado += "ufat";
        break;
      default:
        resultado += entradaTexto[i];
        break;
    }
  }

  // Exibir o texto criptografado e ocultar a imagem
  document.getElementById("myIMG").style.visibility = "hidden";
  saidaTexto.innerHTML =
    /*"<h2 class='saida-h2'>Mensagem Criptografada</h2>*/ "<p class='img-saida'>" +
    resultado +
    "</p>";
}

function decriptografar() {
  var textoCriptografado = document.getElementById("text").value.toLowerCase();
  var saidaTexto = document.getElementById("myIMG2");
  var botaoCopiar = document.getElementById("copiarBotao");

  // Limpar a mensagem anterior e mostrar o botão de copiar
  saidaTexto.innerHTML = "";
  botaoCopiar.style.visibility = "visible";

  var resultado = "";
  for (var i = 0; i < textoCriptografado.length; i += 4) {
    var chunk = textoCriptografado.substring(i, i + 4);

    switch (chunk) {
      case "enter":
        resultado += "e";
        break;
      case "imes":
        resultado += "i";
        break;
      case "ai":
        resultado += "a";
        break;
      case "ober":
        resultado += "o";
        break;
      case "ufat":
        resultado += "u";
        break;
      default:
        resultado += chunk;
        break;
    }
  }

  // Exibir o texto descriptografado e ocultar a imagem
  document.getElementById("myIMG").style.visibility = "hidden";
  saidaTexto.innerHTML =
    /*<h2 class='saida-h2'>Mensagem Descriptografada</h2>*/ "<p class='saida-cripto'>" +
    resultado +
    "</p>";
}

function copiarTexto() {
  var textoCriptografado = document.getElementById("myIMG2").innerText;

  // Cria um elemento de área de transferência temporário e copia o texto
  var tempInput = document.createElement("textarea");
  tempInput.value = textoCriptografado;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  alert("Texto copiado para a área de transferência!");
}
