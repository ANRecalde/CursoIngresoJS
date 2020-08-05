
function mostrar()
{	
	var producto;
	var precio;
	var cantidad;
	var marca;
	var fabricante;
	var control;
	var alcoholMasBarato;//Item A
	var cantidadAlcoholMasBarato;//Item A
	var fabricanteAlcoholMasBarato;//Item A


	alcoholMasBarato=0;

	control=0;
	while(control<2)
	{
		
		producto=prompt("Ingrese el producto");
		while(producto!="barbijo" && producto!="jabón" && producto!="alcohol")
		{
			producto=prompt("Reingrese el producto");
		}
	    precio=prompt("Ingrese el precio")
	    while(precio<100 || precio>300)
		{
			precio=prompt("Reingrese el precio");
		}
		cantidad=prompt("Ingrese la cantidad")
	    while(cantidad<1 || cantidad>1000)
		{
			cantidad=prompt("Reingrese la cantidad");
		}
		marca=prompt("Ingrese la marca");
		fabricante=prompt("Ingrese el fabricante");
		if(producto="alcohol")
		{
			if(alcoholMasBarato==0)
			{
				alcoholMasBarato=precio;
				cantidadAlcoholMasBarato=cantidad;
				fabricanteAlcoholMasBarato=fabricante;
			}
			else
			{
				if(precio<alcoholMasBarato)
				{
					alcoholMasBarato=precio;
					cantidadAlcoholMasBarato=cantidad;
					fabricanteAlcoholMasBarato=fabricante;	
				}	
			}

		
		}	
	control=control+1;
	}
	alert("Existen " + cantidadAlcoholMasBarato + " unidades del fabricante " + fabricanteAlcoholMasBarato + " que es el alcohol más barato");
}

//""  switch  while

