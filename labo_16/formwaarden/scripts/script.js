const setup =() => {
    let btnVerwerken = document.getElementById("verwerk");
    btnVerwerken.addEventListener("click",verwerken);
}

    if(document.getElementById("Is_roker")){
        console.log("Is een roker")
    } else {
        console.log("Is geen roker")
    }

    console.log("Je moedertaal is " + document.getElementByName("moedertaal")[0].value)
    console.log("Je moedertaal is " + geselecteerdeTaal)

    console.log("Je favoriete buurland is " + document.getElementByName("buurland")[0].value)
    for(let i = 0; i < buurlanden.length; i ++){
        if(buurlanden[i].selected){
            console.log("Je favoriete buurland is" + buurland[i].text);
        }
    }
    bestelling = document.getElementsByName("bestelling")[0]
    let output = "Je bestelling bestaat uit ";
    for(let i = 0; i < bestelling.length; i++){
        if(bestelling[i].selected) {
            output += bestelling[i].text + " ";
        }
    }
    console.log(output);

window.addEventListener("load",setup);