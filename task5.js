//Calculate 10!
function interativefactorial(n){
    let ans = 1;
    if (n == 0 || n == 1){
      return ans;
    }else{
      for(var i = n; i >= 1; i--){
        ans = ans * i;
      }
      return ans;
    }  
  }
  function recursivefactorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * recursivefactorial(n-1);
    }
}
let no = 10;
answer = interativefactorial(no);
console.log("The factorial of " + no + " using iterative approach is " + answer);
answer = recursivefactorial(no);
console.log("The factorial of " + no + " using iterative approach is " + answer);
