// Para visualizar cada uno de los ejercios por consola retirar inicio y final de cada /* comentario */


/*
//Ejercicio 1
// creo una variable array con numeros al azar 
var arr = [1, 2, 3, 4, 5];
//creo la funcion ejercicio 1 que recibe por parametro el array , y n (que es el numero de elementos que deben rotar a la derecha)
function ejercicio1(array, n){
// se recorre el array con el for y como condicion i es menor que n 
  for(i=0; i< n; i++){
// creo la variable elementos para que saque el ultimo elemento del array con el metodo pop y entrege nueva longitud
  var elementos = array.pop();
//obtengo el array sin el ultimo numero y con el metodo unshift lo agrega al inicio con una nueva longuitud del array
  array.unshift(elementos);

  };
// muestra como quedo el array ,que en este caso el la primera iteracion es el 5 ultimo elemento queda eliminado con pop 
// posteriormente lo agrega al inicio del array con unshift esto se repite en la segunda iteracion con 4 ,hasta terminar el ciclo 
  return array;
};

var resultado = ejercicio1(arr, 2);
console.log(resultado);

*/

/*
//Ejercicio2
// creo dos variables una de menor a mayor otra mayor a menor
var arr = [1, 2, 3, 4, 5];
var arr2 = [3, 2, 1];
// creo la funcion ejercicio2 que recibe por parametro el array , este revisa si el array esta de menor a mayor
function ejercicio2(array) { 
// inicia recorrido del array con ciclo for iteracion uno en uno 
  for(var i = 0; i < array.length; i++){
//creo un condicional , si el indice de los numeros (elementos) contenidos en el array es menor a la iteracion +1 valida de menor a mayor (true)
  if(array[i] < array[i+1]){ 
  return true;
//si esta con otra posicion [i]...
  } else {
// Entonces retorna False
  return false;
  }
 }
};
// creo dos variables respuestas para poder visualizar los casos de menor a mayor 
// y mayor a menor 
	var respuesta1 = ejercicio2(arr);
	var respuesta2 = ejercicio2(arr2);
//consola muestra ambas respuestas por separado 
	console.log(respuesta1);
	console.log(respuesta2);

*/

//Ejercicio 3 

/*
//se crea un arreglo con numeros al azar
var array = [16,4,6,8]
//creo una funcion ejercicio3 que recibe como parametro el array 
function ejercicio3 (array){
//creo la variable sumas para guardarlas adentro 
	var sumas = [];
//creo la variable respuesta para guardar la suma mayor 
	var res ="";
//se recorre el arreglo con un for contando la cantidad de elementos que tiene el arreglo restando 1
// para que asi coincidan los valores 
	for(var i = 0; i<array.length-1; i++){
//asigno el valor de la suma de los elementos adyacentes a la variable res
		res = array[i] + array[i+1];
//guardo la var res en el arreglo sumas , metodo push permite agregar el elemento al final del array y devolver la nueva loguitud
		sumas.push(res);
//visualizar respuesta en consola
		console.log(sumas);

	}
//finalmente con el metodo Math.max(...) obtengo el valor mayor del arreglo sumas
	var respuesta = Math.max(...sumas);
	console.log(respuesta);	
}
// ejecuto la funcion pasandole el array
ejercicio3(array);

*/

//Ejercicio 4 

/*
//creo la variable con el arreglo array con numeros al azar
var array = [16,4,22,8]
//Creo la funcion ajercicio4 recibiendo por parametros un array
function ejercicio4 (array){
// Con el metodo Math.min identificamos el valor minimo del arreglo
	var respuesta = Math.min(...array);
//retornamos el valor minimo
	return respuesta;
}
// En la variable respuesta ejecuto la funcion ejercicio4() que retorna el valor minimo
var respuesta = ejercicio4(array);
// Creo una segunda funcion para encontrar el indice del valor minimo
function respuestaEjercicio4(array, respuesta ){

	var respuestaFinal;
//se recorre el arreglo donde en cada iteracion comparamos el valor con la respuesta
	for(var i= 0; i<array.length; i++){
// Si el valor del arreglo coincide con la respuesta la variable i es el indice el arreglo
		if(array[i]===respuesta){
			respuestaFinal = i;
		}
	}
	return respuestaFinal;
}
//se ejecuta la respuesta final entregando el array y la respuesta 
console.log( respuestaEjercicio4(array, respuesta) );
*/

//Ejercicio 5 
/*
// Creo la variable array con numeros al azar 
var array = [16,14,2,8]
// creo la funcion ejercicio5 que recibe como parametro el array
function ejercicio5 (array){
//creo la variable respuesta para que con el metodo Math.min(...) entrege el elemento menor 
//y que recibe como paramtro el array
	var respuesta = Math.min(...array);
	return respuesta;
}

var respuesta = ejercicio5(array);
//se toma el primer elemento del array y lo reemplaza por la variable respusta
array[0] = respuesta;

console.log(array);
*/

//Ejercicio 6 

/*
//creo array numeros al azar
var array = [16,14,2,8]
//funcion que contiene mi array
function ejercicio6 (array){
//sort ordena elementos del array localmente ,devuelve el array.
	var respuesta = array.sort(function(a, b){return a-b});
	console.log(respuesta);
	return respuesta;
}

ejercicio6(array);

var respuesta = ejercicio6(array);

*/
//Ejercicio 7 
/*
var array = [1,2,6,8]
// creo una funcion que recibe dos parametros 
function ejercicio7(array, numero){
//se crea un contador para 'contar' la cantidad de veces que el elemento del arreglo no coincidio con el numero...

	var contador = 0;

	for(var i= 0; i<array.length; i++){
// ...Posteriormente si el contador es igual al tamaño del arreglo es por que el numero no existe en el arreglo
		if(array[i] == numero){

		}else{
			contador += 1 ;
		}		
	}
//condicional se ejecutara si el numero se encuentra en el array...
	if(contador == array.length){
//... y lo agregara con metodo push
		array.push(numero);
	}
//Guardo el valor que retorna la funcion ejercicio7 en la variable respuesta para mostrarla en consola
	return array;
}

var respuesta = ejercicio7(array, 8);
console.log(respuesta);
*/

//Ejercicio 8
/*
// creo una variable con numero al azar
var array = [1,2,6,8]
//creo una funcion ejercicio8 que contiene dos parametros
function ejercicio8(array, numero){
// creo variable para encontrar el indice [i]
	var indice;
//inicia recorrido for uno en uno
	for(var i= 0; i<array.length; i++){
// si el indice del array es igual numero..
		if(array[i] == numero){
//..entonces me entrega el indice
			indice = i;
		}	
	}
//entrega la respuesta
	return indice;
}
//la variable respuesta es para mostrar en consola
var respuesta = ejercicio8(array, 1);
console.log(respuesta);
*/


//Ejercicio 9
/*
//creo las 2 primeras variables para la suma entre ambas 
var array =[1,2,6,8];
var array2 = [2,4,6,4];
//creo una variable vacia para luego guardarbel nuevo arreglo
var nuevoArreglo = [];
//funcion debe tener los dos parametros a sumar 
function ejercicio9(array, array2){
// se inicia recorrido for 
	for(var i= 0; i<array.length; i++){
//creo variable suma con los indices de mis array
		var suma = array[i] + array2[i];
metodo push agrega el elemento al final del array 
		nuevoArreglo.push(suma);
	}
	
	return nuevoArreglo;
}

var respuesta = ejercicio9(array, array2);
console.log(respuesta);
*/

//Ejercicio 11

/*
//creo ua variable con el arreglo notas donde se almacenan las 10 notas
	var notas = [];
// La variable numero de notas se usa para que el usuario sepa cual nota esta ingresando
	var numeroDeNota= 1;

	for(var i = 1; i<=10; i++){
// nombre nota es la concatenacion de un texto nota + numero de nota ejemplo nota 1
		var nombreNota = "nota " +numeroDeNota;
//a traves del metodo prompt le decimos al usuario que ingrese las notas
		var ingresarNota = prompt("Ingrese la "+nombreNota)
//A traves del metodo push llenamos el arreglo notas
		notas.push(ingresarNota);
//Aumenta la variable numero de notas 1 para que el usuario sepa cual nota esta ingresando
		numeroDeNota = numeroDeNota + 1;
		
	}
// Creamos la variable suma para "sumar" todas las notas
	var suma = 0;
	for(var i = 0; i<notas.length; i++){
         // por cada iteracion sumamos el valor de notas a suma
		suma = suma + parseInt(notas[i]);
	}
	//calcula el promedio dividiendolo por la cantidad de notas
	var promedio = suma/10;

	console.log(promedio);

*/

