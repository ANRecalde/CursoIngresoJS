/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var temperaturaCentigrados;

	temperatura=txtIdTemperatura.value;

	temperatura=parseInt(temperatura);

	temperaturaCentigrados=temperatura-32;

	alert("La temperatura expresada en grados Centígrados es °" + temperaturaCentigrados);


}

function CentigradosFahrenheit () 
{
	var temperatura;
	var temperaturaFahrenheit;

	temperatura=txtIdTemperatura.value;

	temperatura=parseInt(temperatura);

	temperaturaFahrenheit=temperatura+32;

	alert("La temperatua expresada en Fahrenheit es °" + temperaturaFahrenheit);
}
