const numeros = [5, 8, 12, 2, 4, 18, 21];

// Multiplica cada número por 2
const multiplicados = numeros.map(num => num * 2);
console.log("Números multiplicados:", multiplicados);

// Filtra los números que sean mayores a 10
const filtrados = multiplicados.filter(num => num > 10);
console.log("Números filtrados (mayores a 10):", filtrados);

// Suma todos los números filtrados
const suma = filtrados.reduce((acc, num) => acc + num, 0);
console.log("Suma de los números filtrados:", suma);




