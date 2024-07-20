let userName = document.getElementById("unamereg")
let userEmail = document.getElementById("uemailreg")
let userPass = document.getElementById("upassreg")
let regProcess = document.getElementById("registerbtn")
let alert1 = document.getElementById("alert1")
let aleert2 = document.getElementById("alert2")
let aleeert3 = document.getElementById("alert3")
let reuseEmail = document.getElementById("reusedemail")
let usersArr = []
if (localStorage.getItem("usersRegisteration")) {
    usersArr = JSON.parse(localStorage.getItem("usersRegisteration"))

}
let nameregex = /^.{3,}$/;
let emaiilregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let passregex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

regProcess.addEventListener("click", function () {
    if (nameregex.test(userName.value) && emaiilregex.test(userEmail.value) && passregex.test(userPass.value)) {

        let exsist = usersArr.filter((el) => {
            return el.email == userEmail.value

        })
        if (exsist.length == 0) {
            registeer()
            window.location.href = "file:///D:/Route/assigments/ass11%20local/index.html"
        } else {

            reuseEmail.classList.replace("d-none", "d-flex")
        }

        alert1.classList.remove("d-flex")
        alert1.classList.add("d-none")
        aleert2.classList.remove("d-flex")
        aleert2.classList.add("d-none")
        aleeert3.classList.remove("d-flex")
        aleeert3.classList.add("d-none")


    } else {
        if (nameregex.test(userName.value) == false && emaiilregex.test(userEmail.value) == true && passregex.test(userPass.value) == true) {
            alert1.classList.replace("d-none", "d-flex")
            reuseEmail.classList.remove("d-flex")
            reuseEmail.classList.add("d-none")
            aleeert3.classList.remove("d-flex")
            aleeert3.classList.add("d-none")
            let exsist = usersArr.filter((el) => {
                return el.email == userEmail.value

            })
            if (exsist.length != 0) {

                reuseEmail.classList.replace("d-none", "d-flex")
            }
        }
        else if (nameregex.test(userName.value) == true && emaiilregex.test(userEmail.value) == false && passregex.test(userPass.value) == true) {
            aleert2.classList.replace("d-none", "d-flex")
            reuseEmail.classList.remove("d-flex")
            reuseEmail.classList.add("d-none")
            alert1.classList.remove("d-flex")
            alert1.classList.add("d-none")
            aleeert3.classList.remove("d-flex")
            aleeert3.classList.add("d-none")
        }
        else if (nameregex.test(userName.value) == true && emaiilregex.test(userEmail.value) == true && passregex.test(userPass.value) == false) {
            aleeert3.classList.replace("d-none", "d-flex")
            reuseEmail.classList.remove("d-flex")
            reuseEmail.classList.add("d-none")
            alert1.classList.remove("d-flex")
            alert1.classList.add("d-none")
            aleert2.classList.remove("d-flex")
            aleert2.classList.add("d-none")
            let exsist = usersArr.filter((el) => {
                return el.email == userEmail.value

            })
            if (exsist.length != 0) {

                reuseEmail.classList.replace("d-none", "d-flex")
            }
        }
        else if (nameregex.test(userName.value) == false && emaiilregex.test(userEmail.value) == false && passregex.test(userPass.value) == true) {
            alert1.classList.replace("d-none", "d-flex")
            aleert2.classList.replace("d-none", "d-flex")
            aleeert3.classList.remove("d-flex")
            aleeert3.classList.add("d-none")
        }
        else if (nameregex.test(userName.value) == false && emaiilregex.test(userEmail.value) == true && passregex.test(userPass.value) == false) {
            alert1.classList.replace("d-none", "d-flex")
            aleeert3.classList.replace("d-none", "d-flex")
            aleert2.classList.remove("d-flex")
            aleert2.classList.add("d-none")
            let exsist = usersArr.filter((el) => {
                return el.email == userEmail.value

            })
            if (exsist.length != 0) {

                reuseEmail.classList.replace("d-none", "d-flex")
            }
        }
        else if (nameregex.test(userName.value) == true && emaiilregex.test(userEmail.value) == false && passregex.test(userPass.value) == false) {
            aleert2.classList.replace("d-none", "d-flex")
            aleeert3.classList.replace("d-none", "d-flex")
            alert1.classList.remove("d-flex")
            alert1.classList.add("d-none")
        } else {
            alert1.classList.replace("d-none", "d-flex")
            aleert2.classList.replace("d-none", "d-flex")
            reuseEmail.classList.remove("d-flex")
            reuseEmail.classList.add("d-none")
            aleeert3.classList.replace("d-none", "d-flex")

        }



        // if (nameregex.test(userName.value) == false) {
        //     alert1.classList.replace("d-none", "d-flex")

        // }
        // if (emaiilregex.test(userEmail.value) == false) {

        //     aleert2.classList.replace("d-none", "d-flex")
        //     reuseEmail.classList.remove("d-flex")
        //     reuseEmail.classList.add("d-none")
        // }
        // if (passregex.test(userPass.value) == false) {

        //     aleeert3.classList.replace("d-none", "d-flex")

        // }
    }
}
)





function registeer() {
    let user = {
        name: userName.value,
        email: userEmail.value,
        pass: userPass.value,
    }
    usersArr.push(user)
    localStorage.setItem("usersRegisteration", JSON.stringify(usersArr))
}

