/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var ancho;
	var largo;
	var terreno;
	var cantidadAlambre;

	ancho=txtIdAncho.value;
	largo=txtIdLargo.value;

	ancho=parseInt(ancho);
	largo=parseInt(largo); 
	
	terreno=ancho*2 + largo*2;
	cantidadAlambre=terreno*3;

	alert("La cantidad de alambre a comprar es " + cantidadAlambre + " metros ");

}
function Circulo () 
{
	var radio;
	var cantidadAlambre;
	var terreno;

	radio=txtIdRadio.value;
	radio=parseInt(radio);
	
	terreno=2*3.14*radio;

	cantidadAlambre=terreno*3;


	alert("La cantidad de alambre a comprar es " + cantidadAlambre + " metros ");
}
function Materiales () 
{
	var ancho;
	var largo;
	var terreno;
	var cemento;
	var cal;

	ancho=txtIdAncho.value;
	largo=txtIdLargo.value;

	ancho=parseInt(ancho);
	largo=parseInt(largo); 
	
	terreno=ancho*largo;
	cemento=terreno*2;
	cal=terreno*3;

	alert("La cantidad de material a comprar es " + cemento  + " bolsas de cemento y " + cal + " bolsas de cal");

}