//1 Escribir una función crearContador que retorne una nueva función que incremente un número y lo retorne cada vez que es invocada

const facturas = [
    {
        numero: 1,
        nombre: 'Laura',
        fecha: new Date(),
        items: [
            {idProductos: 1, precio: 1000, cantidad: 1}
        ]
    }
]

//
function CrearFactura(numero, nombre, fecha, items) {
    this.numero = numero
    this.nombre = nombre
    this.fecha = fecha
    this.items = items
  }
  
  const nuevaFactura = new CrearFactura(1, 'Andres', new Date(), [1, 120, 1]);
  const nuevaFactura1 = new CrearFactura(2, 'Laura', new Date(), [2, 240, 2]);
  const nuevaFactura2 = new CrearFactura(3, 'Pablo', new Date(), [1, 260, 3]);

  console.log(nuevaFactura);
  console.log(nuevaFactura2);

//2 Escribir una función crearContador que retorne 
//una nueva función que incremente un número y lo retorne cada vez que es invocada

function crearContador(){
    let contador = 0;
    return function incrementar(){
        contador = contador + 1;
        return contador;
    };
}

  const contador1 = crearContador();


  /* 3 Escribir una función createGame que retorne una nueva función que reciba un número 
  y permita adivinar un número secreto del 1 al 100. Si el número es mayor al número 
  secreto la función retorna la cadena “Muy alto!”, si el número es menor retorna la 
  cadena “Muy bajo!”. Si el número es el correcto retorna “Lo adivinaste, felicitaciones!”*/


  function createGame(secretNumber) {
      return function(newNumber) {
        let randomNumber = Math.floor(Math.random() * 100) + 1 
        if (newNumber === secretNumber) {
            return `Lo adivinaste, felicitaciones!!!`
        } else if (newNumber < secretNumber) {
            return `Muy bajo!`
        } else if (newNumber > secretNumber) {
            return `Muy alto!`
        } 
      }
  }

  let guess = createGame(2);
  let guess2 = createGame(67);

  console.log(guess(18));
  console.log(guess2(12));