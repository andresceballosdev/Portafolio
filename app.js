// mensaje de caracteres en nombre del formulario //

var input1 = document.getElementById("nombre").value;
const mensaje1 = document.getElementById("mensaje1");

input1.addEventListener("input", function() {
    if (this.value.length >= 50) {
        this.value = this.value.slice(0, 50);
        mensaje1.textContent = "¡Has llegado al límite de caracteres permitidos!";
    } else {
        mensaje1.textContent = ""; // Limpiar el mensaje si está dentro del límite
    }
});


// mensaje de caracteres en asunto del formulario //


var input2 = document.getElementById("asunto").value;
const mensaje2 = document.getElementById("mensaje2");

input2.addEventListener("input", function() {
    if (this.value.length >= 50) {
        this.value = this.value.slice(0, 50);
        mensaje2.textContent = "¡Has llegado al límite de caracteres permitidos!";
    } else {
        mensaje2.textContent = ""; // Limpiar el mensaje si está dentro del límite
    }
});


// mensaje de caracteres en mensaje del formulario //

var input3 = document.getElementById("mensaje").value;
const mensaje3 = document.getElementById("mensaje3");

input3.addEventListener("input", function() {
    if (this.value.length >= 300) {
        this.value = this.value.slice(0, 300);
        mensaje3.textContent = "¡Has llegado al límite de caracteres permitidos!";
    } else {
        mensaje3.textContent = ""; // Limpiar el mensaje si está dentro del límite
    }
})  

var input4 = document.getElementById("gmail").value;
const mensaje4 = document.getElementById("mensaje4");

function MostrarMensaje(){

var botonEnviar = document.getElementById("boton-enviarr");

if (input1 !== "" && input2 !== "" && input3 !== "" && input4 !== "") {
  botonEnviar.disabled = false; // Habilita el botón enviar
} else {
  botonEnviar.disabled = true; // Deshabilita el botón enviar
}
}

function MostrarMensaje(){
    
    alert ("Se a enviado el formulario");
}


var botonenviar = document.querySelector("boton-enviar");
botonenviar.onclick = MostrarMensaje;