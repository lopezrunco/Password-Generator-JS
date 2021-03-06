var inputPassword = document.getElementById("password")
var messageElement = document.getElementById("message")
var lengthElement = document.getElementById("length")

function generatePassword() {
    var characters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()_+?><:{}[]"
    var passwordLenght = lengthElement.value
    var password = ""

    for (let charactersIndex = 0; charactersIndex < passwordLenght; charactersIndex++) {
        var randomNumber = Math.floor(Math.random() * characters.length)
        // Substring extracts charaters from the characters variables, using randomNumber as an index and randonNumber plus 1
        password += characters.substring(randomNumber, randomNumber + 1)
    }
    inputPassword.value = password
    messageElement.classList.add("d-none")
}

function copyToClipBoard() {
    inputPassword.select()
    inputPassword.setSelectionRange(0, 99999)
    document.execCommand("copy")
    messageElement.classList.remove("d-none")
}