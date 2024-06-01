let SignUp = document.getElementById("SignUp");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("tittle");

SignUp.onclick = function() {
    nameInput.style.maxHeight = "60px"; 
    title.innerHTML = "Registro";
    SignUp.classList.add("disable");
}
    