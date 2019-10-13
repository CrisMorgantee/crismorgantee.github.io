function identifyWinner() {
  const c11 = document.getElementById("cel11").innerHTML;
  const c12 = document.getElementById("cel12").innerHTML;
  const c13 = document.getElementById("cel13").innerHTML;

  const c21 = document.getElementById("cel21").innerHTML;
  const c22 = document.getElementById("cel22").innerHTML;
  const c23 = document.getElementById("cel23").innerHTML;

  const c31 = document.getElementById("cel31").innerHTML;
  const c32 = document.getElementById("cel32").innerHTML;
  const c33 = document.getElementById("cel33").innerHTML;

  if (
    (c11 != "" && c12 != "" && c13 != "" && c11 == c12 && c12 == c13) ||
    (c11 != "" && c22 != "" && c33 != "" && c11 == c22 && c22 == c33) ||
    (c11 != "" && c21 != "" && c31 != "" && c11 == c21 && c21 == c31) ||
    (c21 != "" && c22 != "" && c23 != "" && c21 == c22 && c22 == c23) ||
    (c31 != "" && c32 != "" && c33 != "" && c31 == c32 && c32 == c33) ||
    (c12 != "" && c22 != "" && c32 != "" && c12 == c22 && c22 == c32) ||
    (c13 != "" && c23 != "" && c33 != "" && c13 == c23 && c23 == c33) ||
    (c31 != "" && c22 != "" && c13 != "" && c31 == c22 && c22 == c13)
  ) {
    if (image == "<img src=img/velha2.png>") {
      alert(" Jogador 1 venceu esta partida!");
      score.pointPlayer1.value = score.pointPlayer1.value * 1 + 1;
    } else {
      alert(" Jogador 2 venceu esta partida!");
      score.pointPlayer2.value = score.pointPlayer2.value * 1 + 1;
    }

    newGame();
  }
}
function newGame() {
  for (i = 1; i < 4; i++) {
    for (j = 1; j < 4; j++) {
      const celName = "cel" + i + j;
      document.getElementById(celName).innerHTML = "";
    }
  }
}
