function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function loadJSON(url, callback) {
    var xobj = new XMLHttpRequest()
    xobj.overrideMimeType("application/json")
    xobj.open('GET', url, true)
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText)
        }
    }
    xobj.send(null)
}
function initGame() {
    loadJSON("./dares/1.json?5", function (response) {
        const dares = shuffle(JSON.parse(response));
        const board = document.getElementById("board");
        const boxes = board.children;
        for (var i = 0; i < boxes.length; i++) {
            if (i != 0 && i != 22) {
                let box = boxes[i].children
                let readableBox = box[0].children
                readableBox[0].innerHTML = i
                readableBox[1].innerHTML = dares[i].dare
                boxes[i].style.background = "url('" + dares[i].url_gif + "') no-repeat"
                boxes[i].style.backgroundSize = "cover"
            }

        }

    })
}

initGame()