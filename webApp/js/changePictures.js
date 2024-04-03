function changeProfilePicture(){
    //closing side-menu
    document.getElementById("sideMenu").style.display="none";

    //opening new window
    var left = (screen.width - 800) / 2;
    var top = (screen.height - 450) / 2;
    const newWindow = window.open("", "myWindow", `width=800,height=450,toolbar=no,menubar=no,location=no,top=${top},left=${left}`);
    //inserting

    //create htmlContent for new window
    const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>New Window Content</title>
    </head>
    <style>
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    .hero{
      width: 100%;
      min-height: 100vh;
      background: linear-gradient(#e7baff, #c2b6d9);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    #drop-area{
      width:500px;
      height:300px;
      padding: 30px;
      background: #fff;
      text-align:center;
      border-radius: 20px;
    }
    #img-view{
      width:100%;
      height:100%;
      border-radius: 20px;
      border: 2px dashed #bbb5ff;
      background: #f7f8ff;
      background-position: center;
      backgrounf-size:cover;
    }
    #img-view img{
      width: 100px;
      margin-top:25px;
    }
    #img-view span{
      display: block;
      font-size: 12px;
      color: #777;
      margin-top:15px;
    }
    </style>
    <body>
      <div class="hero">
        <label for="input-file" id="drop-area">
          <input type="file" accept="image/*" id="input-file" hidden> 
          <div id="img-view">
            <img src="/img/icon.png" >
            <p>Drag and drop or click here to upload image</p>
            <span>Upload any images from desktop</span>
          </div>
        </label>
      </div>
    <script>
      const dropArea = document.getElementById("drop-area");
      const inputFile = document.getElementById("input-file");
      const imageView = document.getElementById("img-view");
      inputFile.addEventListener("change",uploadImage);
      function uploadImage(){
        let imgLink = URL.createObjectURL(inputFile.files(0));
        imageView.style.backgroungImage='url($(imgLink))';
        imageView.textContent = "";
        imageView.style.border = 0;
      }
      dropArea.addEventListener("dragover", function(e){
        e.preventDefault();
      })
      dropArea.addEventListener("drop", function(e){
        e.preventDefault();
        inputFile.files = e.dataTransfer.files;
        uploadImage();
      })
    </script>
    </body>
    </html>
    `;
    newWindow.document.write(htmlContent);
  }