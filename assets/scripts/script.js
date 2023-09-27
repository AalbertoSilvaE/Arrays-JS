prompt("Que dia es hoy?");
/*
Un array es un conjunto de datos que se puede almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto.)

*/
//Variables que estan "sueltas"
let nombre = "Felipe";
let edad = 31;
let puesto = "Instructor"

// Usar un array (arreglo) para "juntar" nuestras variables
//Agregamos los elementos del array separados por coma
let personasDeLaCH31 = ["Felipe","Jose Angel","Marco","Evelin","Alejanro"];

let cosasRandom = ["Pelota", 31 , true, undefined, null];

console.log(typeof(cosasRandom)); //object
console.log(typeof(personasDeLaCH31));

//Al imprimir el tipo de dato de nuestro arreglo obtenemos un object por que los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)

// los arreglos, al ser objetos cuentan con metodos que nos permiten manipularlos

//Ya que tengo mi arreglo, como podemos acceder a esta infromacion?
//Para mostrar la cantidad de elementos que tenemos en un arreglo usamos un metodo llamado "length"

//Metodo length para mostrar los elementos de un array
console.log(personasDeLaCH31.length);

//declarar un array
[5, 4, 3, 2, 1]

//inicializar un array 
let cuentaRegresiva = [5, 4, 3, 2, 1];

//Aceder a un elemento en especifico utilizando los indices

console.log(personasDeLaCH31[0]);//Felipe
console.log(personasDeLaCH31[24]); // undefined por que aun no existe

//Tambien podemos acceder a un elemento d emi arreglo por medio de una variable


//Declaro el indice en una variable 
let index = 4;

//Paso esta variable como indice del arreglo
console.log(personasDeLaCH31[index]);//Alejandro

//Ejemplo de un arrray para un consultorio dental
let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Grey", "Dr. House", "Dr. Zeuz", "Dr. Simi"];

//Para hacer modificaciones usamos el index para acceder a un dato y luego lo reasignamos

dentistas[4] = "Similares";
dentistas[8] = "Dr strange";


console.log(typeof(dentistas[8]));

console.log(dentistas);

function imprimirAsteriscos (){
    console.log("********************************************")
}

//invocacion de la funcion
imprimirAsteriscos();


// metodos de arrays

let listaDelSuper = ["Gansitos", "Coca-Cola", "Arroz", "Atún", "Verduritas"];

// Metodo length para conocer la lomgitud del array
console.log("La cantidad de elementos de mi array es de:" + listaDelSuper.length);

//metodo push() para poner elemento al final de mi array
listaDelSuper.push("Jabon para ropa", "Jabon para trastes");

console.log(listaDelSuper);

//metodo pop() para eliminar elementos del final del array
listaDelSuper.pop();

 console.log(listaDelSuper);
 console.log(listaDelSuper.length);

 // Agregr un elemento al principio del array con el metodo unshift()

 listaDelSuper.unshift("Sabritones");
 console.log(listaDelSuper);
 
  console.log("Ahora el numero de elementos es:" + listaDelSuper.length);


  //Eliminar el primer elemento del array (shift)
listaDelSuper.shift();
console.log(listaDelSuper);

//Saber la posicion de las verduritas
console.log(listaDelSuper.indexOf("Verduritas"));

console.log(listaDelSuper.indexOf("Arroz"))

//Metodo splice para agregar, eliminar o reemplazar elementos

//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elmentoAInsertar2, ...)

listaDelSuper.splice(2, 0, "Cacahuates", "Manzana");

console.log(listaDelSuper);

listaDelSuper.splice(5, 2, "Platano");

console.log(listaDelSuper);


//Metodo .map()

let numeros = [1, 2, 3, 4, 5];

//Crear otro arreglo con los numeros multiplicados x2 [2, 4, 6, 8, 10];

let numerosPorDos = numeros.map(function(numero){
    return numero * 2;
});

console.log(numerosPorDos);


//fELIPE RECOMENDO PRACTICAR EL SPLICE Y EL MAP MAS QUE LOS DEMAS


imprimirAsteriscos();

// Ejercicio consultorio dental


/*
Imaginemos que tenemos un array de pacientes. Este array tiene datos registrados como nombre, edad. Necesitamos modificar este arreglo
para que revisemos la edad de cada paciente, y si la edad de



  Aspectos a considerar:

  - 2 arreglos (original y el modificado)
  - condicion if
  - funcion para agregar el nuevo dato a cada elemeto
  - metodo map()
*/
 
//Arreglo de pacientes original

let pacientesConsultorio = [{
    nombre: "Felipe",
    edad: 31,
},
{
    nombre: "Fatima",
    edad: 26,
},
{
    nombre: "Jesus",
    edad: 51,
}    
]

//Funcion para agregar el texto Necesita atencion especial
function agregarEstadoSalud(paciente){
    let estado = "Saludable";

    //si el paciente tiene mas de 40 anios
    if(paciente.edad>40){
        estado = "Necesita atencion espcial"
    }

    return{
        ...paciente, //copia del paciente
        estadoSalud :estado, //para agregar un nuevo campo o variable (como la edad o el nombre)
    };
}

//Vamos a aplicar la funcion en cada elemento de arreglo con el map
let pacientesConsultorioConEstado = pacientesConsultorio.map(agregarEstadoSalud);

console.log(pacientesConsultorio);
console.log(pacientesConsultorioConEstado);


imprimirAsteriscos();

//--------------------------------

//Carreritas

//hacemos el array con las posiciones iniciales


let posicionesIniciales = ["Roberto", "Andrea", "Jorge", "Ramiro","Sofia"];

console.log(posicionesIniciales);


// eliminamos roberto por que se leciona, poor roberto :(

posicionesIniciales.shift();

//Reacomodamos las posciones incluyendo a Jose que entro por el 5to lugar

posicionesIniciales[0] = "Ramiro";

posicionesIniciales[1] = "Jorge";

posicionesIniciales[2] = "Sofia";

posicionesIniciales[3] = "Andrea";

posicionesIniciales[4] = "Jose";


console.log(posicionesIniciales);



















