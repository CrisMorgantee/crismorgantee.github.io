let image = "<img src=img/velha1.png>";

function play(celulle) {
  const clickCell = document
    .getElementById(celulle)
    .getElementsByTagName("img")
    .item("baseURI");

  if (clickCell != null) {
    alert("Ops! Tem uma velinha usando este campo. Escolha outro!");
  } else {
    document.getElementById(celulle).innerHTML = image;

    /*Verifica se a image usada anterior é a velinha 1 ou 2, ou seja,
		significa que o jogador 1 ou 2 é o jogador atual.
		*/
    if (image == "<img src=img/velha1.png>") {
      image = "<img src=img/velha2.png>";
    } else {
      image = "<img src=img/velha1.png>";
    }
  }
}
