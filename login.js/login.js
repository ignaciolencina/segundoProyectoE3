//Crear un usuario por defecto


import { validateEmail, validatePassword } from "../js/validators.js"
import { Usuario } from "./Claselogin.js"


const usuarioAdmin = new Usuario( "admin@admin.com", "admin")
 //Seleccion de elementos

const $inputEmail= document.getElementById("username")
const $inputContraseña= document.getElementById("password")
const $form= document.getElementById("loginForm")
const $alertCredenciales= document.getElementById('alertLogin')

//Event listener del submit
$form.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // 1. Validar los campos
    if (validateEmail($inputEmail, false) && validatePassword($inputContraseña)) {
      // Campos válidos, falta verificar las credenciales
  
      // a. Traemos los valores
      const email = $inputEmail.value;
      const contraseña = $inputContraseña.value;
  
      // b. Validacion de credenciales
      if (usuarioAdmin.validarCredenciales(email, contraseña)) {
        // i. Ocultar el alert
        $alertCredenciales.classList.add('d-none');
  
        // ii. Guardar la sesión
        sessionStorage.setItem('estaLogueado', true);
        sessionStorage.setItem(
          'usuario',
          JSON.stringify({
            email: usuarioAdmin.email,
            id: usuarioAdmin.id,
          })
        );
  
        // iii. Notificar al usuario del éxito
        swal
          .fire({
            title: 'Bienvenido',
            timer: 1500,
            showCancelButton: false,
            showConfirmButton: false,
            timerProgressBar: true,
          })
          .then(() => {
            // iv. Redirigir al usuario a la página de admin
            window.location.assign('admin.html');
  
            // v.
            // Listo :3
          });
      } else {
        // Credenciales incorrectas
        $alertCredenciales.classList.remove('d-none');
      }
    }
  });