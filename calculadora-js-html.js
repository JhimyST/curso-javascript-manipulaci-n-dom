const titulo= document.querySelector('h1');

const numero1= document.getElementById('numero1');
const numero2= document.getElementById('numero2');
const form= document.querySelector('#formulario');
const div = document.querySelector('div');


/* El getElementsByClassName recoje una colección de html, lo que significa que pueden haber varios elementos que tengan la misma clase y todos ellos serán obtenidos mediante esta función y serán llenados en un array

const btnCalcular = document.getElementsByClassName('btnCalcular') */

form.addEventListener('submit', sumar); //

function sumar(evento){
    
    resultado = parseInt(numero1.value) + parseInt(numero2.value);
    const h2 = document.createElement('h2');
    
    h2.innerText='El resultado es: '+resultado;
    div.appendChild(h2);

    console.log({evento});
    evento.preventDefault(); //evita que la página se recargue después del envío del submit
}  