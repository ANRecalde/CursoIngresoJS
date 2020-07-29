function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destino = txtIdDestino.value;
	switch(estacionIngresada)
	{
		case "Invierno":
		{
			switch(destino)
			{
				case "Bariloche":
					alert("Realizamos viajes a esta ciudad");						
					break
				default:
					alert("No realizamos viajes a esta ciudad");
			}			
			break	
		}
		case "Verano":
		{
			switch(destino)
			{
				case "Mar del plata":
					alert("Realizamos viajes a esta ciudad");						
					break
				case "Cataratas":
					alert("Realizamos viajes a esta ciudad");						
					break	
				default:
					alert("No realizamos viajes a esta ciudad");
			}			
			break	
		}
		case "Primavera":
		{
			switch(destino)
			{
				case "Bariloche":
					alert("No realizamos viajes a esta ciudad");						
					break	
				default:
					alert("Realizamos viajes a esta ciudad");
			}			
			break	
		}
	default:
		alert("Realizamos viajes a esta ciudad");
	}	
}//FIN DE LA FUNCIÓN