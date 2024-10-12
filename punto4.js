const productos = [

    { nombre: 'Laptop', categoria: 'tecnologia', precio: 1000},
    { nombre: 'Smartphone', categoria: 'tecnologia', precio: 600},
    { nombre: 'Camisa', categoria: 'ropa', precio: 30},
    { nombre: 'Teclado', categoria: 'tecnologia', precio: 50 },
    { nombre: 'Zapatillas', categoria: 'ropa', precio: 80 },
];

// Filtrar los productos de la categoría "tecnología"
const productosTecnologia = productos.filter(producto => producto.categoria === 'tecnologia');

// Aplicar un descuento del 10%
const productosConDescuento = productosTecnologia.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9 // Descuento del 10%
}));

// Calcular el total de los precios con el descuento aplicado
const totalConDescuento = productosConDescuento.reduce((acc, producto) => acc + producto.precio, 0);

console.log("Productos de tecnología con descuento:", productosConDescuento);
console.log("Precio total con descuento:", totalConDescuento);