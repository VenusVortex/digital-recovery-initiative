// Brain Scan Archive Authentication System
// Version 4.3.17

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

const accounts = {

    "guest": {
        password: "archive",
        page: "archive.html"
    },

    "research": {
        password: "projectbrainscan",
        page: "research.html"
    },

    "administrator": {
        password: "████████████",
        page: "admin.html"
    }

};

form.addEventListener("submit", function(e){

    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();

    const password = document.getElementById("password").value;

    // Hidden Monarch login
    if(username === "monarch" && password === "butterfly"){

        window.location.href = "monarch.html";
        return;

    }

    // Rewrite Easter Egg
    if(username === "rewrite"){

        error.innerHTML =
        "ERROR 0x07<br>Account is currently logged in.";

        return;

    }

    // Aeon Easter Egg
    if(username === "aeon"){

        error.innerHTML =
        "ERROR 0x18<br>User no longer exists.";

        return;

    }

    // Friend Easter Egg
    if(username === "friend"){

        error.innerHTML =
        "ACCESS DENIED<br>:)";

        return;

    }

    if(accounts[username]){

        if(password === accounts[username].password){

            window.location.href = accounts[username].page;

        }

        else{

            error.innerHTML =
            "Authentication Failed.";

        }

    }

    else{

        error.innerHTML =
        "User not found.";

    }

});
