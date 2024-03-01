import { auth, register, } from "./firebaseConfig.js";

const loginBtn = document.querySelector("#btnlogin");
loginBtn.addEventListener("click", function () {
    let email = document.querySelector("#form2Example17");
    let pass = document.querySelector("#form2Example27");
    register(auth, email.value, pass.value);


});


