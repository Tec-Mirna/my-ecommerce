const emailValidation = {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'Invalid email adress'
  }
  
  //Valor mínimo para una contraseña de una contraseña es 8
  const minPassword = {
    value : 8,
    message: 'El mínimo de caracteres es 8'
  
  }
  //El valor máximo  para la contraseña es 24
  const maxPassword = {
    value : 24,
    message: 'El máximo de caracteres es 24'
  }


  /* Para exportar  */
  export{emailValidation, minPassword, maxPassword}