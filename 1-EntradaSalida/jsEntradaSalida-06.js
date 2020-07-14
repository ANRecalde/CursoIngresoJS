/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var suma;
	var numero1=txtIdNumeroUno.value;
	var numero2=txtIdNumeroDos.value;
	suma = parseInt (numero1)+parseInt (numero2);

	alert("El resultado de su suma es " + suma);
}

