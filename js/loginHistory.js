const loginInfo =
document.getElementById("loginInfo");


let stage = 1;



if(stage === 1){

loginInfo.innerHTML =
`
Last Login:
<br>
UNKNOWN
`;

}


if(stage === 2){

loginInfo.innerHTML =
`
Last Login:
<br>
07/14/1998
`;

}


if(stage === 3){

loginInfo.innerHTML =
`
Last Login:
<br>
TODAY
`;

}


if(stage === 4){

loginInfo.innerHTML =
`
Last Login:
<br>
YOU
`;

}


if(stage === 5){

loginInfo.innerHTML =
`
Last Login:
<br>
YOU DON'T REMEMBER LOGGING IN.
`;

}
