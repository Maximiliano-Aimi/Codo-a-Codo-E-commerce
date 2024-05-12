const form = document.querySelector(".seccion__formulario");

const nombreCompleto = document.querySelector("#nombre-completo");
const telefono = document.querySelector("#telefono");
const correo = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreCompleto.value.trim();
  const tel = telefono.value.trim();
  const email = correo.value.trim();

  if (nombre.length > 5) {
  } else {
    const errorNombre = document.querySelector(".error-nombre");
    errorNombre.textContent = "Debe contener al menos 6 caracteres";
    setTimeout(() => {
      errorNombre.textContent = "";
    }, 2000);
  }

  if (!isNaN(tel) && tel.length > 9 && tel.length < 12) {
  } else {
    const errorTel = document.querySelector(".error-telefono");
    errorTel.textContent = "Este numero de telefono no es valido";
    setTimeout(() => {
      errorTel.textContent = "";
    }, 2000);
  }


  function esEmailValido(email){
    return  !(email.indexOf("@") == -1 || email.indexOf(".") == -1)
  }
  if (esEmailValido(email)) {
  } else {
    const errorEmail = document.querySelector(".error-email");
    errorEmail.textContent = "Este correo electronico no es valido";
    setTimeout(() => {
      errorEmail.textContent = "";
    }, 2000);
  }
});