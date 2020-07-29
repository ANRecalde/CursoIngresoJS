function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var notaExamen;
	

	notaExamen=Math.floor(Math.random() * 11);


	if(notaExamen>8)
		{
			alert("Excelente");
		}

	else
		{
			if(notaExamen>3)
				{
					alert("Aprobado");
				}
			else
				{
					alert("Vamos, la próxima se puede");
				}			
		}	

	
}//FIN DE LA FUNCIÓN