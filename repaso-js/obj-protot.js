//Para que una función sea constructora:
//No puede ser un arrow function
//La primera letra va en mayúscula
//Las propiedades del objeto se definen con 'this'
//Cuando se invoca se utiliza 'new'


/*Ejercicio 1
//1.1. Crea una función constructora llamada Persona que reciba 3 argumentos e inicialice un objeto con 3 propiedades: nombre, peso y altura.
*/

function Persona (nombre, peso, altura) {
    this.nombre = nombre,
    this.peso = peso,
    this.altura = altura
}


//1.2. Agrega dos métodos a la función constructora Persona: saludar y bmi.

Persona.prototype.saludar = function() {}
Persona.prototype.bmi = function() {}

//1.3. saludar debe recibir un nombre y retornar el string "Hola , me llamo " donde es el argumento que se recibe y es la propiedad nombre del objeto.

Persona.prototype.saludar = function(nombre2) {
    return `Hola ${nombre2}, me llamo ${this.nombre}`
}

//1.4. bmi no recibe ningún argumento y retorna el índice de masa corporal que se calcula con la siguiente fórmula:
//peso / altura^2
//Math.round redondea el número
//Math.pow devuelve la base elevada al expononente Math.pow(base, exponente)

Persona.prototype.bmi = function() {
    return Math.round(this.peso / Math.pow(this.altura, 2));
}

//Declaro la variable persona1 y defino sus propiedades
//Recordar que debo invocar la variable declarada y la función constructora

const persona1 = new Persona('Laura', 55, 1.63);
console.log(persona1.saludar('Johna'));
console.log(persona1.bmi());



