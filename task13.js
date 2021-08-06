/*
13.A farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals

example : animals(2, 3, 5) ➞ 36 
          animals(1, 2, 3) ➞ 22*/
const chickensLegs = 2;
const cowsLegs = 4;
const pigsLegs = 4;
function animals(chickens, cows, pigs){
    var totalLegs = (chickensLegs*chickens) + (cowsLegs * cows) + (pigsLegs * pigs);
    console.log("Chickens : "+ chickens +" | Cows : "+cows+" | Pigs : "+pigs);
    console.log("Total Legs : "+ totalLegs);
}

animals(2,3,5);
animals(1,2,3)