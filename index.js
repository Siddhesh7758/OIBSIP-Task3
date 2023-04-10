function convert() {
    let input = document.getElementById("input").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (from == "fahrenheit" && to == "celsius") {
        let result = (input - 32) * 5 / 9;
        to.innerHTML = "celsius"
        document.getElementById("result").innerHTML = `${input} fahrenheit = ${result.toFixed(2)} celsius`;
    } else if (from == "celsius" && to == "fahrenheit") {
        let result = (input * 9 / 5) + 32;
        to.innerHTML = "Celsius"
        document.getElementById("result").innerHTML = `${input} celsius = ${result.toFixed(2)} fahrenheit`;
    }
}

function func() {
    let input = document.getElementById("input").value;
    
    if (input !== "") {
        convert()
    }
    else {
    alert("Enter a valid input")
    }
}




