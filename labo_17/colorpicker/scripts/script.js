const initialize = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        // we moeten zowel op het input als het change event reageren,
        // zie http://stackoverflow.com/questions/18544890
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }






window.addEventListener("load", initialize);