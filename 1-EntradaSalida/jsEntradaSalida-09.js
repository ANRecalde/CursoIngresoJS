/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo;
	var aumento;
	var resultado;

	sueldo= txtIdSueldo.value;
	

	sueldo= parseInt(sueldo);

	aumento= sueldo* 0.1;

	alert("El aumento es $" + aumento);	


	txtIdResultado.value=aumento+ sueldo;

	
}
