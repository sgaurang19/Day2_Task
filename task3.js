// 3.Print the odd numbers less than 100
let i =0;
let ptr = "";
for(i; i<100; i++){
    if(i%2 !=0){
        ptr += i+" ";
    }
}
console.log("By Using for Loop: "+ptr);

//while loop
while(i<100){
    if(i%2 !=0){
        ptr += i+" ";
    }
}
console.log("By Using while Loop: "+ptr);
