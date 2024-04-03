function swicthVision(str){
    var x = document.getElementById("pass"+str);
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}