//
function checkPalindrom(palindrom)
{
    let iftrue = 0;
    let neww ="";
    var cnt = 0;

    for( var i = palindrom.length-1; i >= 0; i-- )
    {   
        neww += palindrom[i];
    }
  
    if(palindrom.localeCompare(neww) == 0){
       iftrue += 1;
    }
    

   
    return iftrue;
}
var pal = 'aaaabbbbaaaa';
var n =checkPalindrom(pal);
if(n==1){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}