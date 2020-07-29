function mostrar ()
{
	//tomo el mes
	var mesDelAño=txtIdMes.value;

	switch(mesDelAño)
	{
		case "Febrero":
		{
			alert("Este mes tiene 28 días");
			break;
		}
		default:
		
			alert("Este mes tiene 30 días o más");
		
	} 

}//FIN DE LA FUNCIÓN