const button = document.getElementById("button")
const body = document.getElementById("body")


button.addEventListener("click", function() {
    body.style.backgroundColor = "red"
        //2nd color
    button.addEventListener("click", function() {
        body.style.backgroundColor = "cornflowerblue"
            //3 color
        button.addEventListener("click", function() {
            body.style.backgroundColor = "crimson"
                //4th color
            button.addEventListener("click", function() {
                body.style.backgroundColor = "darkorange"
                    //5 color
                button.addEventListener("click", function() {
                    body.style.backgroundColor = "green"
                        //6 color
                    button.addEventListener("click", function() {
                        body.style.backgroundColor = "cyan"
                            //7 color
                        button.addEventListener("click", function() {
                            body.style.backgroundColor = "aqua"
                            location.reload()
                        })
                    })
                })
            })
        })
    })
})