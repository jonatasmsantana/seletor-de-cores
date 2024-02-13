window.onload = () => {
    paintHexadecimalColorSample();
    paintRgbaColorSample();
    paintRgbColorSample();
    paintHslaColorSample();
    paintHslColorSample();
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
    hexadecimalCode.textContent = `#${redHexaValue1}${redHexaValue2}${greenHexaValue1}${greenHexaValue2}${blueHexaValue1}${blueHexaValue2}`;
    
    let hexadecimalColorSample = document.querySelector("#hexadecimal-color-sample");    
    hexadecimalColorSample.style.backgroundColor = hexadecimalCode.textContent; 

}

function paintRgbaColorSample(){

   let redValueRgba = document.querySelector('#rgba-red-bar').value; 
   let greenValueRgba = document.querySelector('#rgba-green-bar').value; 
   let blueValueRgba = document.querySelector('#rgba-blue-bar').value; 
   let alphaValueRgba = document.querySelector('#rgba-alpha-bar').value; 

   document.querySelector('#rgba-red-bar').title = redValueRgba; 
   document.querySelector('#rgba-green-bar').title = greenValueRgba; 
   document.querySelector('#rgba-blue-bar').title = blueValueRgba; 
   document.querySelector('#rgba-alpha-bar').title = alphaValueRgba; 

   let rgbaCode = document.querySelector('#rgba-code');
   rgbaCode.textContent = `rgba(${redValueRgba}, ${greenValueRgba}, ${blueValueRgba}, ${alphaValueRgba})`;

   let rgbaColorSample = document.querySelector('#rgba-color-sample');
   rgbaColorSample.style.backgroundColor = rgbaCode.textContent;

}

function paintRgbColorSample(){

    let redValueRgb = document.querySelector('#rgb-red-bar').value; 
    let greenValueRgb = document.querySelector('#rgb-green-bar').value; 
    let blueValueRgb = document.querySelector('#rgb-blue-bar').value;  
 
    document.querySelector('#rgb-red-bar').title = redValueRgb; 
    document.querySelector('#rgb-green-bar').title = greenValueRgb; 
    document.querySelector('#rgb-blue-bar').title = blueValueRgb;
 
    let rgbCode = document.querySelector('#rgb-code');
    rgbCode.textContent = `rgb(${redValueRgb}, ${greenValueRgb}, ${blueValueRgb})`;
 
    let rgbColorSample = document.querySelector('#rgb-color-sample');
    rgbColorSample.style.backgroundColor = rgbCode.textContent;

 }

 function paintHslaColorSample(){

    let hueValueHsla = document.querySelector('#hsla-hue-bar').value; 
    let saturationValueHsla = document.querySelector('#hsla-saturation-bar').value; 
    let lightnessValueHsla = document.querySelector('#hsla-lightness-bar').value; 
    let alphaValueHsla = document.querySelector('#hsla-alpha-bar').value; 
 
    document.querySelector('#hsla-hue-bar').title = hueValueHsla; 
    document.querySelector('#hsla-saturation-bar').title = saturationValueHsla; 
    document.querySelector('#hsla-lightness-bar').title = lightnessValueHsla; 
    document.querySelector('#hsla-alpha-bar').title = alphaValueHsla; 
 
    let hslaCode = document.querySelector('#hsla-code');
    hslaCode.textContent = `hsla(${hueValueHsla}, ${saturationValueHsla}%, ${lightnessValueHsla}%, ${alphaValueHsla})`;
 
    let hslaColorSample = document.querySelector('#hsla-color-sample');
    hslaColorSample.style.backgroundColor = hslaCode.textContent;

 }

 function paintHslColorSample(){

    let hueValueHsl = document.querySelector('#hsl-hue-bar').value; 
    let saturationValueHsl = document.querySelector('#hsl-saturation-bar').value; 
    let lightnessValueHsl = document.querySelector('#hsl-lightness-bar').value;
 
    document.querySelector('#hsl-hue-bar').title = hueValueHsl; 
    document.querySelector('#hsl-saturation-bar').title = saturationValueHsl; 
    document.querySelector('#hsl-lightness-bar').title = lightnessValueHsl;
 
    let hslCode = document.querySelector('#hsl-code');
    hslCode.textContent = `hsl(${hueValueHsl}, ${saturationValueHsl}%, ${lightnessValueHsl}%)`;
 
    let hslColorSample = document.querySelector('#hsl-color-sample');
    hslColorSample.style.backgroundColor = hslCode.textContent;
    
 }

