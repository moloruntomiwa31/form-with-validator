// variable
let payBtn = document.getElementById("open");
let okBtn = document.getElementById("close");
let popUp = document.querySelector(".thank-you");
let inputEl = document.getElementsByTagName("input");

const emailError = document.getElementById("email-error");
const ccError = document.getElementById("cc-error");
const cvvError = document.getElementById("cvv-error");

let emailEl = document.getElementById("email");
let ccnEl = document.getElementById('c-num');
let cvvEl = document.getElementById("cvv");

// popup
payBtn.addEventListener("click", function() {
    emailEl.value = '';
    ccnEl.value = '';
    cvvEl.value = '';
    popUp.classList.add("open")
})
okBtn.addEventListener("click", function() {
    popUp.classList.remove("open")
})

//validate

emailEl.addEventListener("keyup", function() {
    let emailTxt = emailEl.value;
    if (emailTxt.length == 0) {
        emailError.innerHTML = "Mail required.";
        return false
    }
    emailError.innerHTML = `<img src="accept.png" width=16px>`
})

ccnEl.addEventListener("keyup",  function() {
    let ccnTxt = ccnEl.value;
    if (ccnTxt.length == 0) {
        ccError.innerHTML = "CCN required.";
        return false
    }
    if (ccnTxt.length !== 16) {
        ccError.innerHTML = "CCN required.";
        return false
    }
    ccError.innerHTML =  `<img src="accept.png" width=16px>`
})

cvvEl.addEventListener("keyup",  function() {
    let cvvTxt = cvv.value;
    if (cvvTxt.length == 0) {
        cvvError.innerHTML = "cvv required";
        return false
    }
    if (cvvTxt.length !== 4) {
        cvvError.innerHTML = "cvv required";
        return false
    }
    cvvError.innerHTML =  `<img src="accept.png" width=16px>`
})