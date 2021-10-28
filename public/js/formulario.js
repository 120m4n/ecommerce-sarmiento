const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  usuario: /^[a-zA-Z0-9_-]{4,16}$/,
  nombre: /^[a-zA-ZÁ-ý\s]{1,40}$/,
  correo: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-.]{2,4}$/,
  password: /^[a-zA-Z0-9]{4,12}$/,
  telefono: /^[0-9]{7,14}$/,
};

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
};

const validarInput = (e) => {
  switch (e.target.name) {
    case "usuario":
      validarCampo(expresiones.usuario, e.target, "usuario");
      break;
    case "nombre":
      validarCampo(expresiones.nombre, e.target, "nombre");
      break;
    case "password":
      validarCampo(expresiones.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
      validarCorreo2();
      break;
    case "correo2":
      validarCorreo2();
      break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, "telefono");
      break;
    default:
      console.log("default");
  }
};

const validarCorreo2 = () => {
  const correo = document.querySelector("#correo");
  const correo2 = document.querySelector("#correo2");
  if (correo.value !== correo2.value) {
    document
      .getElementById(`grupo__correo2`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__correo2`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__correo2 i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__correo2 i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__correo2 .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos.correo = false;
  } else {
    document
      .getElementById(`grupo__correo2`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__correo2`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__correo2 i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__correo2 i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__correo2 .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos.correo = true;
  }
};

const validarPassword2 = () => {
  const inputPassword = document.querySelector("#password");
  const inputPassword2 = document.querySelector("#password2");

  if (inputPassword.value !== inputPassword2.value) {
    document
      .getElementById(`grupo__password2`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password2`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos.password2 = false;
  } else {
    document
      .getElementById(`grupo__password2`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__password2`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__password2 i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__password2 .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos.password2 = true;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document
      .getElementById(`grupo__${campo}`)
      .classList.add("formulario__grupo-incorrecto");
    document
      .getElementById(`grupo__${campo}`)
      .classList.remove("formulario__grupo-correcto");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.add("fa-times-circle");
    document
      .querySelector(`#grupo__${campo} i`)
      .classList.remove("fa-check-circle");
    document
      .querySelector(`#grupo__${campo} .formulario__input-error`)
      .classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarInput);
  input.addEventListener("blur", validarInput);
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  const terminos = document.getElementById("terminos");
  if (campos.nombre && campos.correo && campos.telefono && terminos.checked) {
    formulario.reset();
    document
      .getElementById("formulario__mensaje-exito")
      .classList.add("formulario__mensaje-exito-activo");
    setTimeout(function () {
      document
        .getElementById("formulario__mensaje-exito")
        .classList.remove("formulario__mensaje-exito-activo");
    }, 3000);
    document
      .querySelectorAll(".formulario__grupo-correcto")
      .forEach((grupo) => {
        grupo.classList.remove("formulario__grupo-correcto");
      });
  } else {
    document
      .getElementById("formulario__mensaje")
      .classList.add("formulario__mensaje-activo");
    setTimeout(function () {
      document
        .getElementById("formulario__mensaje")
        .classList.remove("formulario__mensaje-activo");
    }, 3000);
  }
});
