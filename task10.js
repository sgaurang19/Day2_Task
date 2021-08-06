//Create a function that will return a Boolean specifying if a number is prime
function checkPrime(number){
    let isPrime = true;

    // check if number is equal to 1
    if (number === 1) {
        console.log("1 is neither prime nor composite number.");
    }
    
    // check if number is greater than 1
    else if (number > 1) {
    
        // looping through 2 to number-1
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
let number = 13;
var ans = checkPrime(number);
console.log(" The number "+number+ " is prime?? ANSWER :"+ans);
