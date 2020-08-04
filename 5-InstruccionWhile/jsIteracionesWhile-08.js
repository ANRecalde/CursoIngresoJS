/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;

	numeroIngresado = prompt("Ingrese un número");
	numeroIngresado=parseInt(numeroIngresado);

	if (numeroIngresado>0) 
	{
		contador=numeroIngresado;
	}
	else
		if (numeroIngresado<0) 
		{
			contador=numeroIngresado;
		}
	respuesta=confirm("Desea ingresar otro número?");
	

	while(respuesta==true)
	{
		numeroIngresado = prompt("Ingrese un número");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado>0)
		{
			sumaPositivos=contador+numeroIngresado;
		}
		else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos=contador*numeroIngresado;
			}
		}	
		respuesta= confirm("Desea ingresar otro número?");
	}
		


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN