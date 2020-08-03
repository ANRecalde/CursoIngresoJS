/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	edadIngresada= prompt("Ingrese su edad");	

 	while(edadIngresada<18 || edadIngresada>90 )
	{
		edadIngresada = prompt("Reingrese su edad");	
	}	

	txtIdEdad.value=edadIngresada;

	sexoIngresado = prompt("ingrese su sexo(F/M)");

	while(sexoIngresado!="F" && sexoIngresado!="M" )
	{
		sexoIngresado = prompt("Reingrese su sexo");	
	}	

	txtIdSexo.value=sexoIngresado;

	estadoCivilIngresado= prompt("Ingrese su estado civil. 1-Soltero; 2-Casado; 3-Divorciado; 4-Viudo.");	

 	while(estadoCivilIngresado<1 || estadoCivilIngresado>4 )
	{
		estadoCivilIngresado = prompt("Reingrese su estado civil");	
	}	

	txtIdEstadoCivil.value=estadoCivilIngresado;

	sueldoBruto= prompt("Ingrese su sueldo bruto");	

 	while(sueldoBruto<8000 || isNaN(sueldoBruto)== true)
	{
		sueldoBruto = prompt("Reingrese su sueldo bruto, recordando que debe ser mayor a $8000");	
	}	

	txtIdSueldo.value=sueldoBruto;

	legajo= prompt("Ingrese su N° de legajo");
	legajo=parseInt(legajo);	

 	while(legajo<999 || legajo>10000)
	{
		legajo = prompt("Reingrese su numero de legajo, recordando que es un número de 4 cifras, sin ceros a la izquierda");	
	}	

	txtIdLegajo.value=legajo;

	nacionalidad = prompt("Ingrese su nacionalidad. A-Argentina; E-Extranjero; N-Naturalizado");

	while(nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
	{
		nacionalidad = prompt("Reingrese su nacionalidad");	
	}	

	txtIdNacionalidad.value=nacionalidad;


}
