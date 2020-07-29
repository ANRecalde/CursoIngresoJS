//Abdias Recalde/
function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var tarifa=15000;
	var precioFinal;
	var destino= txtIdDestino.value;

	switch(estacionIngresada)
	{
		case "Invierno":
		{
			switch(destino)
			{
				case "Bariloche":
					precioFinal= tarifa+(tarifa*0.2);					
					break
				case "Cataratas":
					precioFinal= tarifa-(tarifa*0.1);
					break
				case "Mar del plata":
					precioFinal= tarifa-(tarifa*0.2);
					break
				case "Cordoba":
					precioFinal= tarifa-(tarifa*0.1);
					break
			}			
			break	
		}
		case "Verano":
		{
			switch(destino)
			{
				case "Bariloche":
					precioFinal= tarifa-(tarifa*0.2);					
					break
				case "Cataratas":
					precioFinal= tarifa+(tarifa*0.1);
					break
				case "Mar del plata":
					precioFinal= tarifa+(tarifa*0.2);
					break
				case "Cordoba":
					precioFinal= tarifa+(tarifa*0.1);
					break
			}			
			break	
		}
		case "Otoño":
		{
			switch(destino)
			{
				case "Bariloche":
					precioFinal= tarifa-(tarifa*0.1);					
					break
				case "Cataratas":
					precioFinal= tarifa+(tarifa*0.1);
					break
				case "Mar del plata":
					precioFinal= tarifa+(tarifa*0.1);
					break
				case "Cordoba":
					precioFinal= tarifa;
					break
			}			
			break	
		}
		case "Primavera":
		{
			switch(destino)
			{
				case "Bariloche":
					precioFinal= tarifa+(tarifa*0.1);					
					break
				case "Cataratas":
					precioFinal= tarifa+(tarifa*0.1);
					break
				case "Mar del plata":
					precioFinal= tarifa+(tarifa*0.1);
					break
				case "Cordoba":
					precioFinal= tarifa;
					break
			}			
			break	
		}
	}		
alert("El precio final es $" + precioFinal);		
}//FIN DE LA FUNCIÓN