/*12.Create a function that takes voltage and current and returns the calculated power.
example : circuitPower(230, 10) ➞ 2300*/

function calPower(voltage, current) {
	return voltage * current;
}

console.log(calPower(230, 10));