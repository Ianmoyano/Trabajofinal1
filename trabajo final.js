
const esEmailValido = (email) => {
  const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
  return emailRegex.test(email)
}



const enviarFormulario = () => {
  let formularioCorrecto = true;
  const nombreInput = document.getElementById('Nombre/s');
  const apellidoInput = document.getElementById('Apellido/s');
  const codigoInput = document.getElementById('Codigo postal');
  const telInput = document.getElementById('Telefono');
  const emailInput = document.getElementById('email');
  const check = document.getElementById('check')


  if (nombreInput.value.trim() == "") {
    //error de required
    document.getElementById('error-nombre').innerHTML = "El nombre es necesario";
    formularioCorrecto = false;
  } else if (nombreInput.value.trim().length < 3) {
    //error de minLenght 
    document.getElementById('error-nombre').innerHTML = "El nombre debe tener mas de 2 letras";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-nombre').innerHTML = ""
  }


  if (apellidoInput.value.trim() == "") {
    //error de required
    document.getElementById('error-apellido').innerHTML = "El apellido es necesario";
    formularioCorrecto = false;
  } else if (apellidoInput.value.trim().length < 3) {
    //error de minLenght 
    document.getElementById('error-apellido').innerHTML = "El apellido debe tener mas de 2 letras";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-apellido').innerHTML = ""
  }



  if (codigoInput.value.trim() == "") {
    //error de required
    document.getElementById('error-codigo').innerHTML = "El codigo postal es necesario";
    formularioCorrecto = false;
  } else if (codigoInput.value.trim().length <= 3) {
    //error de minLenght 
    document.getElementById('error-codigo').innerHTML = "El codigo postal tiene que tener mas de 3 numeros";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-codigo').innerHTML = ""
  }

  if (telInput.value.trim() == "") {
    //error de required
    document.getElementById('error-tel').innerHTML = "El numero de telefono es necesario";
    formularioCorrecto = false;
  } else if (telInput.value.trim().length <= 6) {
    //error de minLenght 
    document.getElementById('error-tel').innerHTML = "El numero de telefono tiene que tener mas de 6 numeros";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-tel').innerHTML = ""
  }


  if (emailInput.value.trim() == "") {
    //error de required
    document.getElementById('error-email').innerHTML = "El email es necesario";
    formularioCorrecto = false;
  } else if (!esEmailValido(emailInput.value)) {
    //error de minLenght 
    document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
    formularioCorrecto = false;
  } else {
    document.getElementById('error-email').innerHTML = ""
  }

  if (formularioCorrecto) {
    console.log("Nombre/s:", nombreInput.value);
    console.log("Apellido/s:", apellidoInput.value);
    console.log("Email:", emailInput.value);
    console.log("Codigo postal:", codigoInput.value);
    console.log("Telefono:", telInput.value);
    console.log("Acepta los terminos y condiciones:", check.value);

  } else {
    console.log("Formulario incorrecto")
  }

}

const inicializarJs = () => {
  const boton = document.getElementById("enviar-btn")
  boton.addEventListener('click', function (e) {
    enviarFormulario();
  });

}

window.addEventListener('load', inicializarJs)