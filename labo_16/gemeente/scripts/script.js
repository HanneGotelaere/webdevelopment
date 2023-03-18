const setup = () => {
    const gemeente = [];
    while(gemeente[gemeente.length-1] != "stop"){
        const input = window.prompt("Gemeente:")
        gemeente.push(input)
    }

    gemeente.sort();
    for(let i = 0; i < gemeente.length-1; i++){
        keuze.innerHTML +="<option value=" + gemeente[i] + ">" + gemeente[i] + "</option>";
    }
}
window.addEventListener("load", setup);