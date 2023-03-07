

var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 },
  ]
  var articulosFiltrados = articulos.filter(
    function (articulo) {
        return articulo.costo<=500
    }
  )//crea y devuelve un nuevo array que contiene los objetos que cumplan la condición del filtro. Este método devuelve todo el objeto, no solo la condición que se coloca en la función.

  var articulosNombre = articulos.map(
    function (articulo) {
        return articulo.nombre
    }
  )//este método solo devuelve el atributo dentro de la condición que se coloca en la función, es decir solo devuelve los nombres, pero devueve todos los nombres que cumplan con la condición

var encuentraArticulo = articulos.find(function (articulo) {
  return articulo.nombre =='Laptop'
})// este método devuelve el primer elemento que encuentre que cumpla con la condición. Si hay más de uno, no devolverá el resto de elementos que cumplan la condición.

articulos.forEach(function(articulo){
  console.log(articulo.nombre)
})//Ejecuta la función indicada una vez por cada elemento del array. Este método no retorna un nuevo array, solamente devuelve el atributo según filtro 

var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo<=700
})//regresa verdadero o falso según se cumpla con la condición de la función. Sirve para ver si hay o no existencias en una lista. 