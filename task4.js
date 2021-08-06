//4.Print the multiplication table with 7
const mulNumber = 7;
let ans = 0;
console.log("By Using for Loop:");
for(var i=1 ; i<11; i++){
    console.log(mulNumber +" * "+ i +" = " + (mulNumber*i));
}

console.log("By Using while Loop:");
//while loop
var i = 1;
while(i<11){
    console.log(mulNumber +" * "+ i +" = " + (mulNumber*i));
    i++;
}
