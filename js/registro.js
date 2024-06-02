// script.js
import { validateEmail, validateName, validatePassword } from "./validators.js";





document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formularioRegistro");

    
    form.onsubmit = function(event) {
        event.preventDefault();
        const nombreUsuario = document.getElementById("nombreUsuario").value;
        const email = document.getElementById("email").value;
        const contraseña = document.getElementById("contraseña").value;

        console.log("Nombre de Usuario:", nombreUsuario);
        console.log("Email:", email);
        console.log("Contraseña", contraseña);

        

        // Cerrar el modal después del registro
        
    }
});
