// ======================================
// DIGITAL CONSCIOUSNESS ARCHIVE
// AUTHENTICATION SYSTEM
// VERSION 4.3.17
// ======================================


const form = document.getElementById("loginForm");

const error = document.getElementById("error");

let failedAttempts = 0;


// --------------------------------------
// USER DATABASE
// --------------------------------------

const accounts = {

    guest: {
        password: "archive",
        page: "archive.html"
    },


    research: {
        password: "projectbrainscan",
        page: "research.html"
    },


    administrator: {
        password: "████████████",
        page: "admin.html"
    }

};



// --------------------------------------
// LOGIN SYSTEM
// --------------------------------------

form.addEventListener("submit", function(e){

    e.preventDefault();


    const username =
    document.getElementById("username")
    .value
    .trim()
    .toLowerCase();


    const password =
    document.getElementById("password")
    .value;



// --------------------------------------
// MONARCH ACCESS
// --------------------------------------

if(username === "monarch" && password === "butterfly"){


    window.location.href =
    "monarch.html";


    return;

}



// --------------------------------------
// HIDDEN CHARACTER FILES
// --------------------------------------


if(username === "rewrite" && password === "god"){


    error.innerHTML =
    `
    ERROR 0x07
    <br><br>
    ACCOUNT CURRENTLY LOGGED IN.
    `;


    return;

}



if(username === "aeon" && password === "void"){


    error.innerHTML =
    `
    ERROR 0x18
    <br><br>
    USER NO LONGER EXISTS.
    `;


    return;

}



if(username === "friend" && password === "kitty"){


    error.innerHTML =
    `
    ACCESS DENIED
    <br><br>
    :)
    `;


    return;

}



if(username === "priest" && password === "father"){


    error.innerHTML =
    `
    MEMORY DATA CORRUPTED.
    <br><br>
    RECOVERY FAILED.
    `;


    return;

}



if(username === "bsv002" && password === "diablo"){


    error.innerHTML =
    `
    PROFILE LOCATED.
    <br><br>
    ACCESS REQUIRES FAMILY AUTHORIZATION.
    `;


    return;

}




// --------------------------------------
// NORMAL ACCOUNTS
// --------------------------------------


if(accounts[username]){


    if(accounts[username].password === password){


        window.location.href =
        accounts[username].page;


    }

    else{


        failedAttempts++;

        failedLogin();


    }


}

else{


    failedAttempts++;

    failedLogin();


}


});




// --------------------------------------
// FAILED LOGIN FUNCTION
// --------------------------------------

function failedLogin(){


if(failedAttempts < 3){


error.innerHTML =
`
AUTHENTICATION FAILED.
<br><br>
ATTEMPT ${failedAttempts}/3
`;

}


else if(failedAttempts === 3){


error.innerHTML =
`
WARNING
<br><br>

Repeated authentication failures detected.

<br><br>

Incident has been logged.

`;

}



else{


error.innerHTML =
`
ERROR

<br><br>

Stop trying.

<br><br>

You are already inside.

`;

}


}
