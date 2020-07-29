/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres= parseInt(precioTres);

	precioTotal=precioUno+precioDos+precioTres;


	alert("El precio total es $" + precioTotal);
	
	
}

function Promedio () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var promedio;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres= parseInt(precioTres);

	precioTotal=precioUno+precioDos+precioTres;

	promedio=precioTotal/3;

	alert("El promedio es $" + promedio);


}
function PrecioFinal () 
{
	var precioUno;
	var precioDos;
	var precioTres;
	var precioTotal;
	var iva;
	var precioImpuesto;

	precioUno=txtIdPrecioUno.value;
	precioDos=txtIdPrecioDos.value;
	precioTres=txtIdPrecioTres.value;

	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres= parseInt(precioTres);

	precioTotal=precioUno+precioDos+precioTres;

	iva=precioTotal* 0.21;

	precioImpuesto=precioTotal + iva;

	alert("El precio final es $" + precioImpuesto);
}