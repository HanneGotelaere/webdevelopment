const setup = () => {
    let id = document.getElementById("verander")
    id.addEventListener("click", verander)
}

const verander = () =>{
    let id = document.querySelectorAll("p");
    id[0].innerHTML = "Good job!";
}
window.addEventListener("load", setup);