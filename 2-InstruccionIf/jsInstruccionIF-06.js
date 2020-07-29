//Abdias Recalde

function mostrar()
{
	//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
	var edad;

	edad=txtIdEdad.value;

	edad= parseInt(edad);


	 
	   if(edad>=13 && edad<=17)
	   {
	   	alert("La persona es adolescente");
	   }
	 
	   else
	   {
	   	
	   	if(edad<13)
	   	{
	   		alert("La persona es un niño");
	   	}

	   	if(edad>17)
	   	{
	   		alert("La persona es un adulto");
	   	}	
	   }
	

}//FIN DE LA FUNCIÓN

