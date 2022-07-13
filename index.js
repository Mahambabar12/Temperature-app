function conditionCheck() {
    let temp = +document.querySelector("#temp").value;

    if (temp > 30) {
        document.querySelector("#result")
            .innerHTML = "Its too Hot"

    } else if (temp > 25) {
        document.querySelector("#result")
            .innerHTML = "Its pleasant Outside"

    } else if (temp > 20) {
        document.querySelector("#result")
            .innerHTML = "If you are riding a bike please carry jacket"

    } else if (temp > 10) {
        document.querySelector("#result") 
        .innerHTML = "Probably you would need a jacket"

    } else if (temp > 1) {
        document.querySelector("#result") 
        .innerHTML = "Probably you would a need double jacket"

    } else {
        document.querySelector("result") .innerHTML = "Its Freezing outside"
    }
}