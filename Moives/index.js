const content = document.createElement("div")
content.classList = "ml-5"
let message = `<h1 class="offset-4 text-danger">No Results Found</h1>`

function card2(message, i) {

    var div = document.createElement("div");
    div.classList = "col-sm-4 col-lg-4 col-md-4 m-2 float-left  ";
    div.style.width = "18rem";

    var div11 = document.createElement("div");
    div11.classList = "card boxShadow  border border-danger w-70 p-2 h-100 "
    var div2 = document.createElement("div");
    div2.classList = "card-body ";
    var img = document.createElement("img");
    img.classList = "card-img ";
    var p = document.createElement("p");
    p.classList = "card-text text-center";
    p.textContent = message;
    var divB = document.createElement("div");
    divB.classList = "col-md-2 offset-3";

    const button = document.createElement("button")
    button.classList = "btn btn-dark"
    button.textContent = "Watch"

    img.src = "image/image(" + i + ").jpg";




    div.appendChild(div11);
    div11.appendChild(img);
    div11.appendChild(div2);
    div2.appendChild(p);
    div11.appendChild(divB);
    divB.appendChild(button);

    content.appendChild(div);
    document.body.appendChild(content)

}



fetch('http://www.omdbapi.com/?s=%27america&apikey=ac69fb2c')
    .then(function(response) {

        return response.json().statement;
    })
    .then(function(json) {
        let cards = []
        for (var i = 1; i < 7; i++) {

            card2(json[i].title, i);

            cards.push(json[i].title)
        }

        return cards
    })
    .then(cards => {

        var search = document.getElementById("search");

        search.addEventListener("keyup", () => {
            let lists = []
            content.innerHTML = message
            for (var card of cards) {


                if (card.startsWith(search.value) && search.value.length !== 0) {
                    lists.push(card)
                    content.innerHTML = ""
                    for (const list of lists) {
                        card2(list, 1)
                    }
                }


            }

        })

    })
    .catch(function(error) {
        return error;
    });