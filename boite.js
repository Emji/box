
function mousemove(event) {

    let menuCache = document.querySelector(".menu")
    let menuVisible = document.querySelector(".menu2")
    let corps = document.querySelector(".body");

    var x = event.clientX;
    var y = event.clientY;

    if (x < 20) {


        menuCache.classList.add("menu2")
        menuCache.classList.remove("menu")
    } else {

    }
    if (x > 300) {


        menuVisible.classList.add("menu")
        menuVisible.classList.remove("menu2")

    } else {

    }
}
addEventListener("mousemove", mousemove)


