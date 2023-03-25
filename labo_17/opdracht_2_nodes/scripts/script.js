const setup = () => {
    let elemements = document.querySelectorAll('li');
    for (let i = 0; i < elemements.length; i++) {
        elemements[i].className = "listitem"
        elemements[i].style = "color:red;"
    }
    let img = document.createElement("img", )
    img.setAttribute('src','images/vives_logo.png')
    voegToe(img)
}
const voegToe = (elem) => {
    document.getElementsByTagName("body")[0].append(elem)
}

window.addEventListener("load", setup);