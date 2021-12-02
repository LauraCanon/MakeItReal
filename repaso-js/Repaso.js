//1. Imprimir la cantidad del primer ingrediente.
// Imprimir los ingredientes con el siguiente formato:
const recipe = {
    name: "",
    ingredients: [
      { name: "Pan", quantity: 2 },
      { name: "Jamón", quantity: 1 },
      { name: "Queso", quantity: 1 },
    ]
  }

  console.log(recipe.ingredients[0].quantity);

  for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(`${recipe.ingredients[i].quantity} de ${recipe.ingredients[i].name}`)
  }

//2. Escribir una función capitalizar que reciba un string y retorne otro string 
// que capitalice cada palabra de la frase.

function capitalizar(frase) {
    if (typeof frase != 'string') {
        throw TypeError('La frase debe ser una cadena de texto');
    }
    return frase.replace(/\w\S*/g, function(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
}

console.log(capitalizar('hola mundo'));
    

// 3. Length of Last Word

const lastWord = function (word) {
    let str = word.split(" ").filter(Boolean);
    return str[str.length - 1].length;
  }

  console.log(lastWord('hola como estas'));
  console.log(lastWord('hola mundito'));

// 4. 

  const toUppperCase = (string) => {
    const arrCharAt = string.trim().split('').map(char => (char.charCodeAt(char)));
    let upperArrCharAt = arrCharAt.map(upchart => String.fromCharCode((upchart - 32))).join('')
    return upperArrCharAt
}
    console.log(toUppperCase("hola")) 
    console.log(' ');

// 5. //Ejercicio 5

const regex1 = new RegExp("^#(?:[0-9a-f]{3}){1,2}$", "ig");
console.log(regex1.test("#bada55"));
console.log(' ');

//Ejercicio 6

const regex2 = new RegExp("(0?[1-9]|[1|2][0-9]|3[0-1])\/(0?[0-9]|1[0-2])\/(\d*)", "g")
console.log(regex2.test("22/02/2000"));

console.log(' ');

//Ejercicio 7

const regex3 =new RegExp("([a-zA-Z0-9-_]{1,20}@)[a-z]+\.(com|co|net|org|us)", "g")
console.log(regex3.test('2344carAlos_-@algo.com'));
