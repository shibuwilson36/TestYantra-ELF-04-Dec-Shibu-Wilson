const divL1 = document.createElement("div")
const divL2 = document.createElement("div")
const divL3 = document.createElement("div")
const formL = document.createElement("form")
const h3L = document.createElement("h3")

const inputL2 = document.createElement("input")
const inputL4 = document.createElement("input")

const checkboxL = document.createElement("input")

const labelL2 = document.createElement("label")
const labelL4 = document.createElement("label")

const buttonL = document.createElement("button")

const pL2Tag = document.createElement("p")
const pL4Tag = document.createElement("p")


divL1.classList = "col-md-4  mt-3 offset-4 card p-5 mb-5"
divL2.classList = "form-group"
divL3.classList = "offset-5 mt-3"

formL.name = "form"
buttonL.id = "login"
buttonL.type = "button"
checkboxL.type = "checkbox"

inputL2.classList = "form-control"
inputL4.classList = "form-control"

buttonL.classList = "btn btn-outline-info"

h3L.textContent = "Login"
labelL2.textContent = "Email"
labelL4.textContent = "password"
buttonL.textContent = "login"


divL1.appendChild(formL)
formL.appendChild(divL2)
divL2.appendChild(h3L)

divL2.appendChild(labelL2)
divL2.appendChild(inputL2)
divL2.appendChild(pL2Tag)

divL2.appendChild(labelL4)
divL2.appendChild(inputL4)
divL2.appendChild(pL4Tag)

divL2.appendChild(checkboxL)
divL2.appendChild(divL3)
divL3.appendChild(buttonL)
show.addEventListener("click", function() {

    document.getElementById("create-li").classList = "active"
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(divL1)


})

function authentication() {


}
buttonL.addEventListener("click", function() {

    for (let i = 0; i < localStorage.length; i++) {

        let value = localStorage.getItem(localStorage.key(i)).split(",")


        if (value !== null && localStorage.key(i).startsWith("account")) {



            if (value[1] !== inputL2.value || inputL2.value.length === 0) {
                pL2Tag.textContent = "Invalid email"
                inputL2.style.border = "2px solid red"
                pL2Tag.style.display = "block";

            } else {

                inputL2.style.border = "1px solid black"
                pL2Tag.style.display = "none";


            }
            if (value[3] !== inputL4.value || inputL4.value.length === 0) {
                pL4Tag.textContent = "Invalid password"
                pL4Tag.style.display = "block";
                inputL4.style.border = "2px solid red"


            } else {
                console.log("uhhh");
                inputL4.style.border = "1px solid black"
                pL4Tag.style.display = "none";
            }

            if (value[1] === inputL2.value && value[3] === inputL4.value) {
                inputL4.style.border = "1px solid black"
                pL4Tag.style.display = "none";
                location.href = "login.html"
            }

        }

    }
})