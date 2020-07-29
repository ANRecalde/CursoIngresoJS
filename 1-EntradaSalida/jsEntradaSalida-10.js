/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var precio;
	var descuento;
	var resultado;

	precio= txtIdImporte.value;
	

	precio= parseInt(precio);

	descuento= precio*0.25;

	alert("El descuento aplicado es $" + descuento);	

	resultado=precio - descuento;

	txtIdResultado.value= resultado;
}
