let email = document.getElementById("email");
let botonEnviar = document.getElementById("enviar");
let registro = document.getElementById("registro");

let expresion = {correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/}


const validarCampo = () => {

    let validarInput = expresion.correo.test(email.value)

    if(validarInput) {
        document.querySelector(".registro").classList.remove("active")
    }
    else{
         document.querySelector(".registro").classList.add("active")
    }

    registro.addEventListener("submit", (e) => {
        e.preventDefault();

        if(validarInput) {
            registro.reset()
        }

    })

}


email.addEventListener("keyup", validarCampo)
botonEnviar.addEventListener("click", validarCampo)
