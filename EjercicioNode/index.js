const faker = require('faker');
const fs = require('fs');

for (let i = 0; i < 1000; i++ ) {
    const randomName = faker.name.findName();
    console.log(randomName)
}

console.log('El programa ha finalizado correctamente');