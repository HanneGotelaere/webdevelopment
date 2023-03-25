const setup = () => {
    let element = document.getElementById("button");
    element.addEventListener("click", create)
}

const create = () =>{
    let text = "Tekst."
    let paragraph = document.createElement("p");
    paragraph.innerText = text;
    document.querySelector("#myDiv").append(paragraph);
}
window.addEventListener("load", setup);