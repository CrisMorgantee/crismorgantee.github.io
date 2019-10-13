var contadorRegresivo = new Date("nov 30, 2019 08:00:00").getTime();

var x = setInterval(function () {

	var agora = new Date().getTime();
	var distancia = contadorRegresivo - agora;

	var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
	var horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
	var segundos = Math.floor((distancia % (1000 * 60)) / 1000);

	document.getElementById("dias").innerHTML = dias;
	document.getElementById("horas").innerHTML = horas;
	document.getElementById("minutos").innerHTML = minutos;
	document.getElementById("segundos").innerHTML = segundos;

	if (distancia < 0) {
		clearInterval(x);
		document.getElementById("contador").remove();
		document.getElementById("mensagem").innerHTML = "O GRANDE DIA DO EVENTO CHEGOU!";
	}
}, 1000);