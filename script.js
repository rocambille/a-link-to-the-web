const pts = document.querySelector(".PTS");

pts.addEventListener("click", () => {
    pts.style.boxShadow = "2px 1px .3rem black;"
    window.location.assign("game.html")
})