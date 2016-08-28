// problem set 2 https://projecteuler.net/problem=2

//all relavent info on fibonacci numbers used to solve this are located @ https://www.mathsisfun.com/numbers/fibonacci-sequence.html

// golden rule

var fn = 1.61803398874989484820; 
var fn2 = (1-fn);
var root = Math.sqrt(5);
var total = 0;
var idistance = prompt('how far into the fibonacci-sequence would you like to go?') // note not all computers can solve into 4million fibonacci-sequence numbers

	for(var i = 0; i <= idistance; i+= 3 ){

		var power =Math.pow(fn,i); // fn is base, i is exponent
		var power2 =Math.pow(fn2,i) ;// same as above
		var answer = (power-power2)/root; // how to solve for single fibonacci-sequence number

			console.log(answer); // display answer of fibonacci-sequence as each iteration successfully completes

				total += answer; // starting from 0 will add every number appearing in answer consecutivly as loop runs

}


	alert("By considering the terms in the Fibonacci sequence whose values do not exceed four million/find the sum of the even-valued terms." + total);

