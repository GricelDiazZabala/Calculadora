let calculadora = document.querySelector(".calculadora")
let operacion = document.querySelector("#operacion")
let resultado = document.querySelector("#resultado")
let teclado = document.querySelector(".teclado")
let numeros = document.querySelectorAll(".numeros")
let operadores = document.querySelector(".operadores")

function operar(){
    if(operacion = null){
        alert('Es necesario ingresar una operacion')
    } else {
        if(operacion != teclado.attributes){
            alert('Sólo se pueden ingresar caracteres del 0 al 9 y los operandos =, +, -, *, y /')
        }
    }
}