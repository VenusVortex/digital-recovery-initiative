const form=document.getElementById("loginForm");

form.addEventListener("submit",function(e){

e.preventDefault();

let user=document.getElementById("username").value;

let pass=document.getElementById("password").value;

if(user==="guest" && pass==="archive"){

window.location="archive.html";

}

else{

document.getElementById("error").textContent="ACCESS DENIED";

}

});
