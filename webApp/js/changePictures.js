function changeProfilePicture(){
    //closing side-menu
    document.getElementById("sideMenu").style.display="none";

    //opening new window
    var left = (screen.width - 800) / 2;
    var top = (screen.height - 450) / 2;
    window.open("/webApp/html/imageDropper.html", "myWindow", `width=800,height=450,toolbar=no,menubar=no,location=no,top=${top},left=${left}`);
  }