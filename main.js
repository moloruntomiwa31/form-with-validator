// popup

let payBtn = document.getElementById("open");
let okBtn = document.getElementById("close");
let popUp = document.querySelector(".thank-you");
let inputEl = document.getElementsByTagName("input");
payBtn.addEventListener("click", function() {
    inputEl.value = ' ';
    popUp.classList.add("open")
})
okBtn.addEventListener("click", function() {
    popUp.classList.remove("open")
})

//validate

class FormValidator {
    constructor(form, field) {
        this.form = form;
        this.field = field;
    }

    initialise() {
        
    }
}

const formEl = document.getElementById("form");
const fields = ["email", "c-num", "cvv"];