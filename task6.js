//6.Create a function that will convert from Celsius to Fahrenheit

function CtoF(C){
    let F = (C * 9 / 5) + 32;
    return F;
}
let C =41.5;
console.log("Celsius = "+C+" Fahrenheit : "+CtoF(C));
