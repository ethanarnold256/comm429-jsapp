cardFlex = document.getElementById("card-flex");

function createCard(object) {
    return`\
        <div class="card city-card">
            <img class="main" src="${object.image}" />
            <div class="title">
                <div class="ruby">
                    <div class="jyutping">${object.ruby.replaceAll(/[0-9]/g, "<sup>$&</sup>")}</div>
                    <div class="honzi">${object.honzi}</div>
                </div>
                <img class="icon" src="${object.icon}" />
                <div class="english">
                    ${object.english}
                    <div class="translation">
                        ${object.translation.join().replaceAll(/,/g, "<br />")}
                    </div>
                </div>
            </div>
            <p class="description">
                ${object.description}
            </p>
        </div>`
}

function allocateCard(string) {
    card = document.createElement("div");
    card.innerHTML = string;
    cardFlex.appendChild(card);
}

function generateCards(data) {
    for(i in data) {
        allocateCard(
            createCard(data[i])
        )
    }
}