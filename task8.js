//8. Create a function that receives an array of numbers and returns an array containing only the positive numbers

function onlyPositiveNumbers(array){
    arr= [];
    for (let i = 0; i<array.length; i++){
        if(array[i]>0){
            arr.push(array[i]);
        }
    }
    console.log(arr);
}
var array = [13, 25, 43, -4, -53, 34, 45, -2];
console.log("Original Array: ")
console.log(array);
console.log("After Removing Negative numbers: ");
onlyPositiveNumbers(array);