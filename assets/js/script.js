window.onload = ()  =>{
    var btn = document.getElementById("createAccountButton");
    var openLayer = document.getElementById("overlay");
    var closeRegister = document.getElementById("closePopUp");
    btn.addEventListener("click" ,(e)=>{
        e.preventDefault();
        var popup = document.getElementById("regiterPopUp");
        popup.style.display =  "block";
        openLayer.style.display = "block";

    })
    closeRegister.addEventListener("click",(e) =>{
        e.preventDefault();
        var popup = document.getElementById("regiterPopUp");
        popup.style.display =  "none";
        openLayer.style.display = "none";

    }
    )
  
}