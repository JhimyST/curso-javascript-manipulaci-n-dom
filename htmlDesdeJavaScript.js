/* Usar querySelector() para obtener elementos que no tengan más atributos y solo sean etiquetas */
const titulo= document.querySelector('h1')
const p= document.querySelector('p')

const pelis = document.querySelector('.peliculas')

const peliculas = document.getElementsByClassName('peliculas')
const input= document.getElementById('nombre')
console.log(input.value);

console.log({
    titulo,
    p,
    pelis,
    peliculas,
    input
})

titulo.innerHTML='El innerHTML convierte todo a código html'
titulo.innerText= 'El innerText solo lo convierte a texto'

console.log(titulo.getAttribute('class')); // obtenemos el CONTENIDO de la clase

console.log(titulo.setAttribute('class', 'gato')); // CAMBIAMOS un atributo de nuestro elemento, en este caso del título h1

/* Funcion classList(), es especialmente para clases */
titulo.classList.add('rojo') // AGREGAMOS una nueva clase
titulo.classList.remove('gato') // QUITAMOS una clase

/* Modificando value del INPUT */
input.value = "Tomas"

/* Crear un elemento Html desde 0 */

// En consola
console.log(document.createElement('div'));

// En el Html
const imagen = document.createElement('img')
// -- Le cambiamos el atributo --
imagen.setAttribute('src', 'https://img.freepik.com/vector-gratis/fondo-galaxia-realista_23-2148991322.jpg')

console.log(imagen);
p.innerHTML="" // -- Eliminar el contenido dentro de una etiqueta
p.append(imagen)

