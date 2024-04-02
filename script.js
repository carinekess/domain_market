
//console.log("loging in here!");
let button=document.querySelector(".button");
let pass= document.getElementsByClassName("pass")[0];
//let email= document.querySelector(".email");
let loginForm=document.querySelector("#submit");
console.log(pass)
console.log(loginForm)
loginForm.addEventListener("submit", function (event) {
    if(pass.value==""){
        alert("please Enter password");

    }
    else if(pass.value.length <6 || pass.value.length>14){
        window.location.href='home.html'
    }
    else {
        window.alert("Please Password must not less 6 or greather 14 characters")
        window.history.back() 
    }
    
});