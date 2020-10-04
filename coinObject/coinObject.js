const coin = {
    state: 0,
    flip: function () {
        this.state = Math.round(Math.random())
    },
    toString: function () {
        const string = document.createElement("div")

        if (this.state === 1) {
            string.innerHTML = "Heads"
        }
        else {
            string.innerHTML = "Tails"
        }
        return string
    },
    toHTML: function () {
        const image = document.createElement('img');
        if (this.state === 1) {
            image.src = "coinObject/images/cara.jpg"
        }

        else {
            image.src = "coinObject/images/coroa.jpg"
        }
        image.style = "width: 75px; heigth: 75px;"
        return image;
    }
};

function display20Flips() {
    const results = [];
    for (i = 0; i < 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toString())
        results.push(coin.state)
    }
    showResults(results)
}
function display20Images() {
    const results = [];
    for (i = 0; i < 20; i++) {
        coin.flip()
        document.body.appendChild(coin.toHTML())
        results.push(coin.state)
    }
    showResults(results)

}

const showResults = (results) => {
    const showResults = document.createElement("div")
    showResults.innerHTML = "Resultados:  " + results
    document.body.appendChild(showResults)
}

display20Flips()
display20Images()