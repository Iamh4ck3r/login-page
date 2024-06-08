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

// function a() {
//     if (pass.value=="" && usr.value=="") {
//         return 1;
//     }
// }

// function b() {
//     if (usr.value==x && pass.value!==y) {
//         alert("Username matched but Password incorrect");
//         pass.style.borderColor="red";
//         usr.style.borderColor="green";
//         return a();
//     }
// }

// function c() {
//     if (usr.value!==x && pass.value==y) {
//         alert("Username Incorrect but Password Matched");
//          usr.style.borderColor="red";
//          pass.style.borderColor="green";
//          return b();
//     }
// }

// function d() {
//     if (usr.value!==x && pass.value!==y) {
//         alert("Password and Username invalide")
//         pass.style.borderColor="red";
//         usr.style.borderColor="red";
//         return c();
//     }
// }

// function e() {
//     if (usr.value==x && pass.value==y) {
//         alert("login Successfully");         
//         window.location.href="https://www.youtube.com/";
//         pass.style.borderColor="green";
//         usr.style.borderColor="green";
//         return d()
//     }
// };

// fm.addEventListener("submit", e());


// let fn = function () {
//     if (usr.value.length>0 && pass.value.length>0) {
//         btn.removeAttribute("disabled");
//         btn.style.color="#fff";
//         btn.style.background="#4caf50";
//         btn.onmouseenter="#45a049";
//     }
// };

// pass.addEventListener("change", fn);


