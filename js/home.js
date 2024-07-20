let welcomehome= document.querySelector(".welcome h1")
let logbtn=document.getElementById("logoutbtn")
let sessionhome= JSON.parse(sessionStorage.getItem("filteruser"))

  welcomehome.innerHTML="welcome" + " "+sessionhome[0].name

  logbtn.addEventListener("click",function(){
    window.location.href="file:///D:/Route/assigments/ass11%20local/index.html"

  })