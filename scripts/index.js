window.onload = () => {
    paintHexadecimalColorSample();
}

function paintHexadecimalColorSample(){

    let redHexaValue1 = document.querySelector("#hexadecimal-red-bar-1").value;
    let redHexaValue2 = document.querySelector("#hexadecimal-red-bar-2").value;
    let greenHexaValue1 = document.querySelector("#hexadecimal-green-bar-1").value;
    let greenHexaValue2= document.querySelector("#hexadecimal-green-bar-2").value;
    let blueHexaValue1 = document.querySelector("#hexadecimal-blue-bar-1").value;
    let blueHexaValue2 = document.querySelector("#hexadecimal-blue-bar-2").value;

    const numbers = [10, 11, 12, 13, 14, 15];
    const letters = ["a", "b", "c", "d", "e", "f"];

    for(let i = 0; i < numbers.length; i++){
        if(redHexaValue1 == numbers[i]){redHexaValue1 = letters[i]}
        if(redHexaValue2 == numbers[i]){redHexaValue2 = letters[i]}
        if(greenHexaValue1 == numbers[i]){greenHexaValue1 = letters[i]}
        if(greenHexaValue2 == numbers[i]){greenHexaValue2 = letters[i]}
        if(blueHexaValue1 == numbers[i]){blueHexaValue1 = letters[i]}
        if(blueHexaValue2 == numbers[i]){blueHexaValue2 = letters[i]}
    }

    document.querySelector("#hexadecimal-red-bar-1").title = redHexaValue1;
    document.querySelector("#hexadecimal-red-bar-2").title = redHexaValue2;
    document.querySelector("#hexadecimal-green-bar-1").title = greenHexaValue1;
    document.querySelector("#hexadecimal-green-bar-2").title = greenHexaValue2;
    document.querySelector("#hexadecimal-blue-bar-1").title = blueHexaValue1;
    document.querySelector("#hexadecimal-blue-bar-2").title = blueHexaValue2;

    let hexadecimalCode = document.querySelector("#hexadecimal-code");

    hexadecimalCode.textContent = "#" + redHexaValue1 + redHexaValue2 +
    greenHexaValue1 + greenHexaValue2+blueHexaValue1+blueHexaValue2;
    
    let hexadecimalColorSample = document.querySelector("#hexadecimal-color-sample");
    
    hexadecimalColorSample.style.backgroundColor = hexadecimalCode.textContent;   
}