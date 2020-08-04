/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	
	contador=0;
	acumulador=0;
	
	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);
	respuesta= confirm("Desea ingresar otro número?");

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);		
		acumulador=acumulador + numeroIngresado;
		contador ++;
		respuesta= confirm("Desea ingresar otro número?");
	}	

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN