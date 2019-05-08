var randomNumber;
var guess;

function initGame() {
    input_txt.value = "";

    document.getElementById("input_txt").focus();

    document.getElementById("input_txt").disabled = false;
    document.getElementById("tanda_tanya").disabled = false;
    document.getElementById("reset").disabled = true;

    document.getElementById("pesan").innerHTML = "TEBAK ANGKA DIANTARA 1 - 100";

    randomNumber = Math.ceil(Math.random() * 100);

    var input = document.getElementById("input_txt");

    input.onkeypress = function (e) {
        e = e || window.event;
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            var charCode = (typeof e.which === "undefined") ? e.keyCode : e.which;
            if (charCode && !/\d/.test(String.fromCharCode(charCode))) {
                return false;
            }
        }
    }
}

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    } else {
        limitCount.value = limitNum - limitField.value.length;
    }
}

function tandatanya() {
    guess = document.getElementById("input_txt").value;

    document.getElementById("input_txt").focus();

    if (guess === "") {
        document.getElementById("pesan").innerHTML = "0 TERLALU RENDAH, COBA LAGI";
    } else if (guess > randomNumber) {
        document.getElementById("pesan").innerHTML = guess + " KETINGGIAN BUNG";
        input_txt.value = "";
    } else if (guess < randomNumber) {
        document.getElementById("pesan").innerHTML = guess + " RENDAH BETUL"
        input_txt.value = "";
    } else {
        document.getElementById("pesan").innerHTML = "YAH BENER! ANGKANYA ADALAH " + guess + ".";
        input_txt.value = "";

        endGame();
    }
}

function endGame() {
    document.getElementById("input_txt").disabled = true;
    document.getElementById("tanda_tanya").disabled = true;
    document.getElementById("reset").disabled = false;
}

function playAgain() {
    initGame();
}

window.onload = initGame;