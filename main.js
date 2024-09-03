// Gerar número aleatório entre 1 e 100
let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessField").value);
    guesses++;
    if (userGuess === randomNumber) {
        displayMessage(`Parabéns! Você adivinhou corretamente em ${guesses} tentativas.`);
        document.getElementById("guessField").value = "";
        document.getElementById("guessField").focus();
        randomNumber = Math.floor(Math.random() * 100) + 1; // Gerar um novo número
        guesses = 0; // Resetar o número de tentativas
    } else if (userGuess < randomNumber) {
        displayMessage("Tente um número maior.");
    } else {
        displayMessage("Tente um número menor.");
    }
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        checkGuess();
    }
}

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}

// Adicionar evento de teclado ao campo de entrada
document.getElementById("guessField").addEventListener("keypress", handleKeyPress);
