function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperatura;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var cantidadViudos;
	var cantidadHombresNoCasados;
	var terceraEdadFiebre;
	var promedioEdadHombresSolteros;
	var edadHombresSolteros;
	var cantidadHombresSolteros;
	var inicio;

	cantidadHombresSolteros=0;
	edadHombresSolteros=0;
	mayorTemperatura=0;
	cantidadViudos=0;
	cantidadHombresNoCasados=0;
	terceraEdadFiebre=0;
	
	inicio=confirm("Desea ingresar un pasajero?");
	while(inicio==true)	
	{
		nombre=prompt("Ingrese el nombre");
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		sexo=prompt("Ingrese el sexo(f o m)");
		while(sexo!="f" && sexo!="m")
		{
			sexo=prompt("Reingrese el sexo(f o m)");
		}	
		estadoCivil=prompt("Ingrese el estado civil");
		while(estadoCivil!="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
		{
			estadoCivil=prompt("Reingrese el estado civil");
		}	
		temperatura=prompt("Ingrese la temperatura corporal");
		
		if(mayorTemperatura==0)
		{
			mayorTemperatura=temperatura;
			nombreMayorTemperatura=nombre;
		}
		else
		{
			if(temperatura>mayorTemperatura)
			{
				mayorTemperatura=temperatura;
				nombreMayorTemperatura=nombre;
			}	
		}

		if(edad>17 && estadoCivil=="viudo")
		{
			cantidadViudos=cantidadViudos+1;
		}

		if(sexo=="m" && estadoCivil=="soltero" ||  estadoCivil=="viudo")
		{
			cantidadHombresNoCasados=cantidadHombresNoCasados+1;
		}

		if(edad>60 && temperatura>38)
		{
			terceraEdadFiebre=terceraEdadFiebre+1;
		}

		if(sexo=="m" && estadoCivil=="soltero")
		{
			edadHombresSolteros=edadHombresSolteros+edad;
			cantidadHombresSolteros=cantidadHombresSolteros+1;
		}	

		inicio=confirm("Desea ingresar otro pasajero?");
	}
	promedioEdadHombresSolteros=(edadHombresSolteros/cantidadHombresSolteros);
	alert("La persona con mayor temperatura es " + nombreMayorTemperatura)
	alert("La cantidad de viudos es " + cantidadViudos);
	alert("La cantidad de hombres que no están casados es " + cantidadHombresNoCasados);
	alert("La cantidad de personas de la tercera edad y con fiebre son " + terceraEdadFiebre);
	alert("El promedio de edad de los hombres solteros es " + promedioEdadHombresSolteros + "años");
}
//""  switch  while