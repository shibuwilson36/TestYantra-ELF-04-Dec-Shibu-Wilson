const home = document.getElementById("home")
const div = document.getElementById("content")
let image1 = document.createElement("img")

image1.src = "image/image1.webp"
image1.style.width = "1000px"
home.addEventListener("click", function() {
    div.innerHTML = ""

    div.appendChild(image1)
})