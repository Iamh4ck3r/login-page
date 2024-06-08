let usr = document.querySelector("#username");
let pass = document.querySelector("#password");
let btn = document.querySelector(".btn");
let fm = document.querySelector("form");
let inp = document.querySelector("input");
let ank = document.querySelector("a");
let x = "ajay";
let y = "pass";


fm.addEventListener("submit", function (event) {
    event.preventDefault();
   });

fm.addEventListener("submit", function () {
    if (pass.value=="" && usr.value=="") {
    }

    else if(usr.value==x && pass.value!==y){
        alert("Username matched but Password incorrect");
        pass.style.borderColor="red";
        usr.style.borderColor="green";
    }

    else if(usr.value!==x && pass.value==y){
        alert("Username Incorrect but Password Matched");
        usr.style.borderColor="red";
        pass.style.borderColor="green";
    }

    else if(usr.value!==x && pass.value!==y){
        alert("Password and Username invalide")
        pass.style.borderColor="red";
        usr.style.borderColor="red";
    }

    else if (usr.value==x && pass.value==y) {
        alert("login Successfully");
        window.location.href="https://www.youtube.com/";
        pass.style.borderColor="green";
        usr.style.borderColor="green";
    }
});



