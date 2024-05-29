//Crear un usuario por defecto


import { Usuario } from "./Claselogin.js"


const usuarioAdmin = new Usuario( "admin@admin.com", "admin")
 //Seleccion de elementos

const $inputEmail= document.getElementById("username")
const $inputContraseña= document.getElementById("password")
const $form= document.getElementById("loginForm")

//Event listener del submit

$form.addEventListener('submit', (e)=>{
    e.preventDefault()
})