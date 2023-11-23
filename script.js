function noBtnFunc () {
    addEventListener(
        alert(`Em chọn chưa đúng, chọn lại giúp anh đii !! `)
    )
}
function moveButton(){

    var noButtonElement = document.getElementById("noBtn");

    var maxX = window.innerWidth - noButtonElement.clientWidth;
    var maxY = window.innerHeight - noButtonElement.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    noButtonElement.style.left = newX + "px";
    noButtonElement.style.top = newY + "px";
}

function yesBtnFunc () {
    addEventListener(
        alert(`Em chọn đúng người rồi đó <3 `)
    )
}