

function chechInfoSub(){
    document.getElementById("button-container").style.margin ="30px";
    document.getElementById("invalid-email").style.display = "none";
    document.getElementById("invalid-password").style.display = "none";
    document.getElementById("invalid-match").style.display = "none";
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var bool = true;
    if(!(email.includes("@"))){
        document.getElementById("invalid-email").style.display ="block";
    }
    if((pass1.lenght>16)){
        document.getElementById("invalid-password").style.display ="block";
        bool = false;
    }
    if(!(containsNumbers(pass1))){
        document.getElementById("invalid-password").style.display = "block";
        bool = false;
    }
    if(!(containsSpecialChars(pass1))){
        document.getElementById("invalid-password").style.display = "block";
        bool = false;
    }
    if(!(pass1==pass2)&&bool){
        document.getElementById("invalid-match").style.display = "block";
    }
    console.log(email);
    console.log(pass1);
    document.getElementById("info-message").style.display="none";
    document.getElementById("button-container").style.margin ="0px";
    sendInfoServer(email,pass1);
}

function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}


function checkPasswordStrength() {
    var password = document.getElementById('pass1').value;
    var meter = document.getElementById('strength-meter');

    var strength = 0;
    if (password.match(/[a-zA-Z0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[~!@#$%^&*()_+{}|:"<>?`\-=[\]\\';,./]/)) {
        strength += 1;
    }
    if (password.length > 8) {
        strength += 1;
    }

    switch (strength) {
        case 0:
            meter.className = 'strength-weak';
            document.getElementById("strength-meter-text").innerText=""
            meter.style.width = '0px';
            break;
        case 1:
            meter.className = 'strength-weak';
            document.getElementById("strength-meter-text").innerText="Weak password"
            meter.style.width = '100px';
            break;
        case 2:
            meter.className = 'strength-medium';
            document.getElementById("strength-meter-text").innerText="Medium password"
            meter.style.width = '200px';
            break;
        case 3:
            meter.className = 'strength-strong';
            document.getElementById("strength-meter-text").innerText="Strong password"
            meter.style.width = '300px';
            break;
    }
}

var xhr = new XMLHttpRequest();
xhr.open('POST', 'file_php.php', true);
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        // Risposta ricevuta dal server PHP
        console.log(xhr.responseText);
    }
};
xhr.send('parametro1=valore1&parametro2=valore2');

function sendInfotoCheck(){
    // JavaScript
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'file_php.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // Risposta ricevuta dal server PHP
            console.log(xhr.responseText);
        }
    };
    xhr.send('parametro1=valore1&parametro2=valore2');
}


























/*
function sendInfotoCheck(){ 
    var emailLog = document.getElementById("email-log").value;
    var passLog = document.getElementById("pass-log");
    const dataToCheck = {
        email: emailLog,
        password: passLog,
    }
    fetch('http://your-node-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToCheck)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log('Response from server:', data);
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("invalid-credentials").style.display="block";
    });
}

function sendInfoServer(email,pass){
const dataToSend = {
    emails: email,
    password: pass,
};
// Make an AJAX POST request to the server
fetch('http://your-node-server-endpoint', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataToSend)
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Network response was not ok.');
})
.then(data => {
    console.log('Response from server:', data);
})
.catch(error => {
    console.error('Error:', error);
    document.getElementById("invalid-session").style.display="block";
});

}

function sendInfo(email,pass){
    let xmlString = 
        `<?xml version="1.0" encoding="UTF-8"?>
        <?xml-model href="userInfo.dtd" type="application/xml-dtd"?>
        <user>
            <email>`+ email + `</email>
            <password>` + pass + `</password>
        </user>`;
    //create a parser
    let parser = new DOMParser();
    //create a xmlDocument
    let xmlDoc = parser.parseFromString(xmlString, "text/xml");
    let serializer = new XMLSerializer();
    let modifiedXmlString = serializer.serializeToString(xmlDoc);
    console.log(modifiedXmlString)

}

function sendInfo2(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
        if(xhr.readyState==4){
            if(xhr.status==200){
                console.log(xhr.responseText );
            }
            if(xhr.status==404){
                console.log('file not found');
            }
        }
    }
    xhr.open('get', '/xml-setting/Exchange.xml', true);
    xhr.send();
}*/