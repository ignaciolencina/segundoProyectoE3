// Retorna un booleano, siendo true cuando el campo está correcto
export const validateName = ($field) => {
    // No sea vacio, null, etcs
    if (!$field || !$field.value.trim()) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    // Longitud
    if ($field.value.trim().length < 3 || $field.value.trim().length > 40) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    // Letras
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ0-9\s]+$/;
    if (!regex.test($field.value)) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
  };
  
  // Retorna un booleano, siendo true cuando el campo está correcto

  
  // Retorna un booleano, siendo true cuando el campo está correcto

  
  // Retorna un booleano, siendo true cuando el campo está correcto
  export const validateUrl = ($field) => {
    // No sea vacio, null, etcs
    if (!$field || !$field.value.trim()) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    // Longitud
    if ($field.value.trim().length < 3) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    // Formato mail
    const regex =
      /^\b(?:https?|ftp):\/\/[-A-Za-z0-9+&@#\/%?=~_|!:,.;]+[-A-Za-z0-9+&@#\/%=~_|]$/;
    if (!regex.test($field.value)) {
      $field.classList.add('is-invalid');
      $field.classList.remove('is-valid');
      return false;
    }
  
    $field.classList.remove('is-invalid');
    $field.classList.add('is-valid');
    return true;
  };
  
 export const validatePassword = ($field) => {
    // No sea vacio, null, etcs
    if (!$field || !$field.value.trim()) {
      $field.classList.add('is-invalid');
      return false;
    }
  
    // Longitud
    // if ($field.value.trim().length < 8 || $field.value.trim().length > 30) {
    //   $field.classList.add('is-invalid');
    //   return false;
    // }
  
    // Letras
    // Al menos un caracter y un número, long minima de 8
    // const regex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/;
    // if (!regex.test($field.value)) {
    //   $field.classList.add('is-invalid');
    //   return false;
    // }
  
    $field.classList.remove('is-invalid');
    return true;
  };
//Validar NOMBRE
// Retorna un booleano, siendo true cuando el campo está correcto
export const validateNameFormulario = ($field) => {
  // No sea vacio, null, etcs
  if (!$field || !$field.value.trim()) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  // Longitud
  if ($field.value.trim().length < 2 || $field.value.trim().length > 25) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  // Letras
  const regex = /^[a-zA-ZÁÉÍÓÚáéíóúÜüÑñ\s]+$/;
  if (!regex.test($field.value)) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  $field.classList.add("is-valid");
  return true;
};

//Validar TELEFONO
// Retorna un booleano, siendo true cuando el campo está correcto
export const validateNumberFormulario = (field) => {
  // No sea vacio, null, etc
  if (!field || !field.value.trim()) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  // Letras
  const regex = /^\d{9}$/;
  if (!regex.test(field.value)) {
    field.classList.add("is-invalid");
    field.classList.remove("is-valid");
    return false;
  }

  field.classList.remove("is-invalid");
  field.classList.add("is-valid");
  return true;
};

//Validar EMAIL
// Retorna un booleano, siendo true cuando el campo está correcto
export const validateEmailFormulario = ($field, showValidTick = true) => {
  // No sea vacio, null, etcs
  if (!$field || !$field.value.trim()) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  // Longitud
  if ($field.value.trim().length < 3 || $field.value.trim().length > 100) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  // Formato mail
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test($field.value)) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  if (showValidTick) $field.classList.add("is-valid");
  return true;
};



//Validar COMENTARIOS
// Retorna un booleano, siendo true cuando el campo está correcto
export const validateNotasFormulario = ($field) => {
  // No sea vacio, null, etcs
  if (!$field || !$field.value.trim()) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  // Longitud
  if ($field.value.trim().length < 2 || $field.value.trim().length > 500) {
    $field.classList.add("is-invalid");
    $field.classList.remove("is-valid");
    return false;
  }

  $field.classList.remove("is-invalid");
  $field.classList.add("is-valid");
  return true;
};

