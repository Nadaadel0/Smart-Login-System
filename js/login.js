let logEmail = document.getElementById("uemaillog")
let logPass = document.getElementById("upasslog")
let logProcess = document.getElementById("loginbtn")
let alertfalselogin = document.getElementById("alertlogin")
let alertFalseEmail = document.getElementById("alertloginemail")
let alertFalsePass = document.getElementById("alertloginpass")

let arrForLogin = JSON.parse(localStorage.getItem("usersRegisteration"))

logProcess.addEventListener("click", function () {


    if (logPass.value && logEmail.value) {
        alertfalselogin.classList.remove("d-flex")
        alertfalselogin.classList.add("d-none")
        if (arrForLogin == null) {
            alertFalseEmail.classList.replace("d-none", "d-flex")
        } else {
            alertFalseEmail.classList.remove("d-flex")
            alertFalseEmail.classList.add("d-none")

            let exsist = arrForLogin.filter((el) => {
                return el.email == logEmail.value && el.pass == logPass.value

            })
            // console.log(exsist);
            if (exsist.length != 0) {
                sessionStorage.setItem("filteruser", JSON.stringify(exsist))
                window.location.href = "file:///D:/Route/assigments/ass11%20local/home.html"
            
                alertFalseEmail.classList.remove("d-flex")
                alertFalseEmail.classList.add("d-none")
                alertFalsePass.classList.remove("d-flex")
                alertFalsePass.classList.add("d-none")

            } else {
                let exsistEmail = arrForLogin.find((el) => {
                    return el.email == logEmail.value

                })


                if (exsistEmail == undefined) {
                    alertFalseEmail.classList.replace("d-none", "d-flex")
                    alertFalsePass.classList.remove("d-flex")
                    alertFalsePass.classList.add("d-none")
                }
                else if (exsistEmail.email == logEmail.value) {
                    alertFalsePass.classList.replace("d-none", "d-flex")
                    alertFalseEmail.classList.remove("d-flex")
                    alertFalseEmail.classList.add("d-none")
                }





            }
        }
    } else {
        alertfalselogin.classList.replace("d-none", "d-flex")
        alertFalsePass.classList.remove("d-flex")
        alertFalsePass.classList.add("d-none")
        alertFalseEmail.classList.remove("d-flex")
        alertFalseEmail.classList.add("d-none")
    }

})
