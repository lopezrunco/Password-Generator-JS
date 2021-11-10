var inputPassword = document.getElementById("password")     // Obtiene el input #password donde se mostrara la contrasena generada
var messageElement = document.getElementById("message")     // Obtiene el elemento de mensaje de contrasena copiada
var lengthElement = document.getElementById("length")       // Obiente el elemento input donde se ingresa el largo de la contrasena

// Funcion que genera una contrasena aleatoria
function generatePassword() {
    var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+?><:{}[]"   // Caracteres a usar
    var passwordLenght = lengthElement.value        // Largo de la contrasena
    var password = ""                               // Variable donde se guardara la contrasena

    // Itera por el largo de la contrasena y da un valor aleatorio
    for (let charactersIndex = 0; charactersIndex < passwordLenght; charactersIndex++) {    
        var randomNumber = Math.floor(Math.random() * characters.length)    // Genera un numero aleatorio y lo guarda en una variable
        password += characters.substring(randomNumber, randomNumber + 1)    // Substring extrae caracteres de la variable characters, usando como indice la variable randonNumber y randonNumber mas 1
                                                                            // con el simbolo += los guardamos en la variable password uno detras del otro
    }
    inputPassword.value = password  // Asigna la contrasena generada a el input password
    
    messageElement.classList.add("d-none")  // Al generar una contrasena nueva, se oculta el mensaje de copiado
}

// Funcion para copiar contrasena al portapapeles
function myFunction() {
    inputPassword.select()                      // Selecciona el campo de texto
    inputPassword.setSelectionRange(0, 99999)   // Selecciona el campo en mobiles

    document.execCommand("copy")                // El metodo execCommand ejecuta un comando especifico (en este caso "copy") en una seccion editable

    // alert(inputPassword.value + " has been copied to clipboard")    // Aviso de que se ha copiado la contrasena en alert

    messageElement.classList.remove("d-none")   // Muestra el aviso de copiado a la contrasena en el document
}