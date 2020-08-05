function mostrar()
{
	var numeroIngresado=prompt("Ingrese un número");
	var paridad;
	var primerPar;

	numeroIngresado=parseInt(numeroIngresado);

	paridad=(numeroIngresado%2);
	primerPar=((numeroIngresado/numeroIngresado)+1);
	

	for (var par=primerPar;par<=numeroIngresado; par+2) 
	{
		alert(par);				
	}
}//FIN DE LA FUNCIÓN