const create = document.getElementById("create")

const div1 = document.createElement("div")
const div2 = document.createElement("div")
const div3 = document.createElement("div")
const form = document.createElement("form")
const h3 = document.createElement("h3")
const input1 = document.createElement("input")
const input2 = document.createElement("input")
const input3 = document.createElement("input")
const input4 = document.createElement("input")
const checkbox = document.createElement("input")
const label1 = document.createElement("label")
const label2 = document.createElement("label")
const label3 = document.createElement("label")
const label4 = document.createElement("label")
const button = document.createElement("button")
const p1Tag = document.createElement("p")
const p2Tag = document.createElement("p")
const p3Tag = document.createElement("p")
const p4Tag = document.createElement("p")


div1.classList = "col-md-4  mt-3 offset-4 card p-5 mb-5"
div2.classList = "form-group"
div3.classList = "offset-5 mt-3"

form.name = "form"
button.id = "login"
button.type = "button"
checkbox.type = "checkbox"

input1.classList = "form-control"
input2.classList = "form-control"
input3.classList = "form-control"
input4.classList = "form-control"
button.classList = "btn btn-outline-info"

h3.textContent = "Create Account"
label1.textContent = "Name"
label2.textContent = "Email"
label3.textContent = "Mobile"
label4.textContent = "password"
button.textContent = "create"


div1.appendChild(form)
form.appendChild(div2)
div2.appendChild(h3)
div2.appendChild(label1)
div2.appendChild(input1)
div2.appendChild(p1Tag)
div2.appendChild(label2)
div2.appendChild(input2)
div2.appendChild(p2Tag)
div2.appendChild(label3)
div2.appendChild(input3)
div2.appendChild(p3Tag)
div2.appendChild(label4)
div2.appendChild(input4)
div2.appendChild(p4Tag)
div2.appendChild(checkbox)
div2.appendChild(div3)
div3.appendChild(button)



create.addEventListener("click", function() {
    document.getElementById("create-li").classList = "active"
    document.getElementById("content").innerHTML = ""
    document.getElementById("content").appendChild(div1)
})





button.addEventListener("click", function() {


    let valid = true
    const nameValue = input1.value.trim()
    const emailValue = input2.value.trim()
    const mobileValue = input3.value.trim()
    const passwordValue = input4.value.trim()

    const nameLength = nameValue.length
    const emailLength = emailValue.length
    const mobileLength = mobileValue.length
    const passwordLength = passwordValue.length

    if (nameLength < 1 && emailLength < 1 && mobileLength < 1 && passwordLength < 1) {

        input1.style.border = "2px solid red"
        input2.style.border = "2px solid red"
        input3.style.border = "2px solid red"
        input4.style.border = "2px solid red"

        p1Tag.textContent = "Enter name"
        p1Tag.style.display = "block";
        p2Tag.textContent = "Enter Email"
        p2Tag.style.display = "block";
        p3Tag.textContent = "Enter Mobile"
        p3Tag.style.display = "block";
        p4Tag.textContent = "Enter password"
        p4Tag.style.display = "block";
        valid = false
        return false

    } else {

        input1.style.border = "1px solid black"
        p1Tag.style.display = "none";
        input2.style.border = "1px solid black"
        p2Tag.style.display = "none";
        input3.style.border = "1px solid black"
        p3Tag.style.display = "none";
        input4.style.border = "1px solid black"
        p4Tag.style.display = "none";

    }
    if (nameLength < 3) {

        input1.style.border = "2px solid red"
        p1Tag.textContent = "Enter name"
        p1Tag.style.display = "block";

        valid = false



    }
    if (emailLength < 3 || !emailValue.endsWith("@gmail.com")) {
        input2.style.border = "2px solid red"
        p2Tag.textContent = "Enter a valid Email"
        p2Tag.style.display = "block";

        valid = false


    }
    if (mobileLength != 10 || mobileValue.match(/[0-9]/) === null) {

        input3.style.border = "2px solid red"
        p3Tag.textContent = "Enter a valid mobile"
        p3Tag.style.display = "block";

        valid = false

    }
    if (passwordLength < 1) {

        input4.style.border = "2px solid red"
        p4Tag.textContent = "Enter password"
        p4Tag.style.display = "block";
        valid = false

    }
    if (passwordValidation(passwordValue)) {

        input4.style.border = "2px solid red"
        p4Tag.textContent = `A minimum 8 characters password contains  
            a combination of uppercase and lowercase letter
            and number are required. 
            `
        p4Tag.style.display = "block";
        valid = false

        return false

    }
    let values = [nameValue, emailValue, mobileValue, passwordValue]

    if (valid) {
        addStroge(values)
        input1.value = ""
        input2.value = ""
        input3.value = ""
        input4.value = ""
        return false
    }

})


function passwordValidation(password) {
    let valid = true;
    console.log(password);
    let upperV = password.match(/[A-Z]/)
    let lowerV = password.match(/[a-z]/)
    let numberV = password.match(/[0-9]/)
    let special = password.match(/[!-=]/) //'!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    console.log(special);
    if (numberV !== null && upperV !== null && lowerV !== null && special !== null) {
        valid = false
    }

    return valid
}

function addStroge(values) {

    let i = localStorage.length + 2
    localStorage.setItem(`accountValues${i}`, values)
}
checkbox.addEventListener("click", function() {
    if (checkbox.checked) {
        input4.type = "text";
    } else {
        input4.type = "password";
    }
})