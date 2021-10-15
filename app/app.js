let formulario = document.getElementById("formulario");
let btn = document.getElementById("btn_enviar");
let expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/};

const validarCampo = (e) => {
    e.preventDefault()
    let inputEmail = document.getElementById("email")
    let validarInput = expresion.correo.test(inputEmail.value)

    if(validarInput) {
        formulario.classList.remove("campo__incorrecto");
        document.querySelector(".mensaje__incorrecto").style.display = "none"
        formulario.reset()
    }
    else{
        formulario.classList.add("campo__incorrecto");
        document.querySelector(".mensaje__incorrecto").style.display = "block"
    }

}

btn.addEventListener("click", validarCampo)