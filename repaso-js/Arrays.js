//Duplica cada elemento del array.
//Map crea un nuevo array llamando a una función para cada elemento del array

const arr = [1, 2, 3, 4, 5, 6]

const newArray = arr.map(num => num * 2)
console.log(newArray);

//Utilizar el método filter para filtrar los números pares de arr
//Filter crea un nuevo array incluyendo el elemento del array que cumple una condición.
//La condición es evaluada por una función

const newFilter = arr.filter(x => x % 2 === 0);
console.log(newFilter);

//Utilizar el método reduce para sumar todos los elementos

const newReduce = arr.reduce((num1, num2) => num1 + num2);

//const newReduce = arr.reduce(myFunction)
//function myFunction (num1, num2) {
//    return num1 + num2
//}

console.log(newReduce);

