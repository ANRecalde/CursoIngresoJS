/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

*/ 
function CalcularPrecio () 
{
	var cantidadLamparas;
	var precioUnidad;
	var precioBruto;
	var precioNeto;
	var precioFinal;
	var precioDescuento;
	var impuesto;
	var marcaLampara;


	cantidadLamparas=txtIdCantidad.value;
	precioUnidad=35;
	precioBruto=cantidadLamparas*precioUnidad;
	marcaLampara= Marca.value;

	cantidadLamparas=parseInt(cantidadLamparas);


	if(cantidadLamparas>5)
	{		
		 precioNeto=precioBruto-(precioBruto*0.5);				
	}
	else
	{
		if(cantidadLamparas==5)
		{
			if(marcaLampara=="ArgentinaLuz")
	   		{
	   			precioNeto=precioBruto-(precioBruto*0.4);				   		  		
	   		}
			else
	   		{
				precioNeto=precioBruto-(precioBruto*0.3);				
			}
		}
		else
		{
			if(cantidadLamparas==4)
			{
				if(marcaLampara=="ArgentinaLuz" || marcaLampara=="FelipeLamparas")
    	  		{
    	  			
   		  			precioNeto=precioBruto-(precioBruto*0.25);
   		  			
    	  		}
	    	  	else
    	  		{   	  			
   		  			precioNeto=precioBruto-(precioBruto*0.2);  		  				
    	  		}
			}
			else
			{
				if(cantidadLamparas==3)
				{
					if(marcaLampara=="ArgentinaLuz")
		  			{		
		  					precioNeto=precioBruto-(precioBruto*0.15);		
	  				}
    	  			else
	  				{
	  					if (marcaLampara=="FelipeLamparas") 
  						{	
	  							precioNeto=precioBruto-(precioBruto*0.1);	  						
  						}
	  					else
  			   			{	  			   			
		  					precioNeto=precioBruto-(precioBruto*0.05);		  							
		  			    }	
					}
				}	
		    }
	}
}
if (precioNeto>120) 
{
	precioFinal=precioNeto + (precioNeto*0.1);
	alert("IIBB usted pago $" + (precioNeto*0.1) );
	txtIdprecioDescuento.value=precioFinal;
}
else
{
	txtIdprecioDescuento.value=precioNeto;
}	
}
