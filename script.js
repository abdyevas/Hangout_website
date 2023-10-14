function showMessage() {
    for (let i = 0; i < 300; i++) {
        createHeart();
    }
    alert("YOU ARE SO CUTE! THANKS! ^^")
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "&#10084;";
    document.body.appendChild(heart);

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    heart.style.left = x + "px";
    heart.style.top = y + "px";

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function moveButton() {
    var buttonNo = document.getElementById("noButton");
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    buttonNo.style.left = x + "px";
    buttonNo.style.top = y + "px";
}

var buttonNo = document.getElementById("noButton");
buttonNo.addEventListener("mouseover", moveButton);