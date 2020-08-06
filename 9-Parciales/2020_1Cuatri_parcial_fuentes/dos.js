function mostrar()
{
  var material;
  var cantidad;
  var precio;
  var importeBruto;
  var importeNeto;
  var descuento;
  var inicio;
  var cantidadBolsas;
  var precioCemento;
  var precioCal;
  var precioArena;
  var mayorBolsas;
  var mayorMaterial;
  var materialMasCaro;
  var mayorPrecio;

  cantidadBolsas=0;
  mayorBolsas=0;
  materialMasCaro=0;


  inicio=confirm("Desea iniciar la compra?");

  while(inicio==true)
  {
  	material=prompt("Ingrese el producto");
  	while(material!="arena" && material!="cal" && material!="cemento")
  	{
  		material=prompt("Reingrese el material");
  	}
  	cantidad=prompt("Ingrese la cantidad de bolsas");
  	cantidad=parseInt(cantidad);
  	precio=prompt("Ingrese el precio por bolsa");
  	precio=parseInt(precio);
  	while(precio<1)
  	{
  		precio=prompt("Reingrese el precio por bolsa");
  	}

  	cantidadBolsas=cantidadBolsas+cantidad;

  	
  	switch(material)
  	{
  		case "cal":
  		{
  			precioCal=cantidad*precio;
  		}

  		case "cemento":
  		{
  			precioCemento=cantidad*precio;
  		}

  		case "arena":
  		{
  			precioArena=cantidad*precio;
  		}
  	}

  	importeBruto=precioArena+precioCemento+precioCal;

  	if(cantidadBolsas>15 && cantidadBolsas<30)
  	{
  		descuento=0.15;
  	}
  	if(cantidadBolsas>30)
  	{
  		descuento=0.25;
  	}

  	importeNeto=importeBruto-(importeBruto*descuento);

  	if(mayorBolsas==0)
  	{
  		mayorBolsas=cantidad;
  		mayorMaterial=material;
  	}
  	else
  	{
  		if(cantidad>mayorBolsas)
  		{
  			mayorBolsas=cantidad;
  			mayorMaterial=material;
  		}

  	}

  	if(mayorPrecio==0)
  	{
  		mayorPrecio=precio;
  		materialMasCaro=material;
  	}
  	else
  	{
  		if(precio>mayorPrecio)
  		{
  			mayorPrecio=precio;
  			materialMasCaro=material;
  		}

  	}

  	inicio=confirm("Desea ingresar otro producto?");	
  }	

  alert("El importe bruto es $"+ importeBruto);
  alert("El importe neto es $ "+ importeNeto);
  alert("El material con mayor cantidad de bolsas es " + mayorMaterial);
  alert("El material más caro es "+ materialMasCaro);
 
}
//"" switch  while