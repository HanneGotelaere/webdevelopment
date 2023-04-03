let PLAYFIELD_HEIGHT = 800
let PLAYFIELD_WIDTH = 800
let playfield;
let interval;


const setup = () => {
    playfield = document.getElementById("playField");
    let start_button = document.getElementsByTagName("button")[0]
    start_button.addEventListener("click",start)
};
const start = () => {
    document.getElementsByClassName("start")[0].removeChild(document.getElementsByTagName("button")[0])
    let img = createImage()
    playfield.appendChild(img)
    interval = setInterval(inter,2000)
}
const inter = () => {
    if (isBom(document.getElementsByTagName("img")[0])){
        document.getElementById("points").innerText = Number(document.getElementById("points").innerText) + 1
        updateImage(document.getElementsByTagName("img")[0])
        resetInterval()
    } else {
        stop()
    }
}
const resetInterval = () => {
    clearInterval(interval)
    interval = setInterval(inter,2000)

}
const createImage = () => {
    let img_veld = document.createElement("img")
    img_veld.id = "target"
    img_veld = updateImage(img_veld)
    img_veld.addEventListener("click",update)
    return img_veld
}
const updateImage = (img_veld) => {
    img_veld.style.left = Math.random() * PLAYFIELD_WIDTH +"px"
    img_veld.style.top = Math.random() * PLAYFIELD_HEIGHT +"px"
    img_veld.src = kiesRandomImg();
    return img_veld
}
const update = (event) => {
    let geklikt = event.target
    if (isBom(geklikt)){
        stop()
    } else {
        geklikt.style.left = Math.random() * PLAYFIELD_WIDTH + "px"
        geklikt.style.top = Math.random() * PLAYFIELD_HEIGHT + "px"
        geklikt.src = kiesRandomImg();
        verhoogpunten()
        resetInterval()

    }
}
const verhoogpunten = () => {
    document.getElementById("points").innerText = Number(document.getElementById("points").innerText) + 1
}
const kiesRandomImg = () => {
    return `images/${Math.floor(Math.random() * 5)}.png`
}
const isBom = (elem) => {
    return elem.src.slice(-5,-4) === "0"
}
const stop = () => {
    clearInterval(interval)
    alert("finished " + document.getElementById("points").innerText + " punten")
}

window.addEventListener("load", setup);