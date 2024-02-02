const form   = document.querySelector("form");
const campos = document.querySelectorAll(".required");
const spans  = document.querySelectorAll(".campo-obrigatorio");

function setError(index) {
    campos[index].classList.add("invalido");
    campos[index].classList.remove("valido");
    spans[index].style.display = "block";
}

function removeError(index){
    campos[index].classList.remove("invalido")
    campos[index].classList.add("valido");
    spans[index].style.display = "none";
}

function nameValidate() {
    if(campos[0].value === "") {
        setError(0);
    } else {
        removeError(0);
    }
}

function emailValidate() {
    if(campos[1].value === "") {
        setError(1);
    } else {
        removeError(1);
    }
}

function numberValidate() {
    if(campos[2].value === "") {
        setError(2);
    } else {
        removeError(2);
    }
}

function messageValidate() {
    if(campos[3].value === "") {
        setError(3);
    } else {
        removeError(3);
    }
}

function checkForm() {
    nameValidate();
    emailValidate();
    numberValidate();
    messageValidate();

    const formItems = form.querySelectorAll(".invalido")

    const isValid = [...formItems].every( (item) => {
        return item.className === "invalido"
    })

    if(isValid){
        alert("cadastrado com sucesso")
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
});