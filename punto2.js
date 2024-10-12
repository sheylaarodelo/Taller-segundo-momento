const estudiante = {
    nombre: 'Juan Perez',
    edad: 20,
    dirección: {
        ciudad: 'Medellin',
        calle: 'Calle 10',
        numero: 101
    },


    notas: {
        matematicas: 4.5,
        ingles: 3.8,
        ciencias: 4.0
    }
};

// Destrución anidada


const {nombre, dirección: {ciudad}, notas: {matematicas}} = estudiante;

console.log("Nombre:", nombre);

console.log("Ciudad:", ciudad);

console.log("Nota en matemáticas:", matematicas);