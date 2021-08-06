//2.Print numbers from 1 to 10
function printNos(){
    var ptr =""
    let i=1;
    // For Loop 
    for(i; i<11; i++){
        ptr += i+" ";
    }
    console.log("By Using for Loop: "+ptr);

    //while loop
    while(i<11){
        ptr += i+" ";
        i++;
    }
    console.log("By Using while Loop: "+ptr);

    //do while loop
    i=1;
    ptr ="";
    do{
        ptr += i+" ";
        i++;
    }while(i<11);
    console.log("By Using do-while Loop: "+ptr);
    
}

printNos();