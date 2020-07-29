/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto;
var intento;
var contadorIntentos;

contadorIntentos=0;



function comenzar()
{
	numeroSecreto=Math.floor(Math.random() * 100) + 1;

}

function verificar()
{
	intento=txtIdNumero.value;
	contadorIntentos=contadorIntentos + 1;
	txtIdIntentos.value=contadorIntentos;

	if(intento==numeroSecreto)
	{
		alert("Usted es el ganador, y en solo " + contadorIntentos + " intentos" );
	}
	else
	{
		if(intento>numeroSecreto)
		{
			alert("Uhhh se pasó..." );
		}
		else
		{
			alert("Uhhh se quedó corto..." );
		}	
	}	
	
}