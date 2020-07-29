function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	var invierno =(mesDelAño=="Julio"||mesDelAño=="Agosto");
	var preInvierno = (mesDelAño=="Enero"||mesDelAño=="Febrero" ||mesDelAño=="Marzo"||mesDelAño=="Abril"||mesDelAño=="Mayo"||mesDelAño=="Junio");
	var posInvierno =(mesDelAño=="Septiembre"||mesDelAño=="Octubre" ||mesDelAño=="Noviembre"||mesDelAño=="Diciembre");
	var temporada = (preInvierno||posInvierno||invierno);

	switch(temporada)
	{
		case invierno:
		{
			alert("Abrigate que hace frio");
			break;
		}
		case preInvierno:
		{
			alert("Falta para el invierno");
			break;
		}
		case posInvierno:
		{
			alert("Ya pasamos el frio, ahora calor!!!");
			break;
		}
		
	} 
}//FIN DE LA FUNCIÓN