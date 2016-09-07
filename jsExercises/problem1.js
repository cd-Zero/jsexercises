console.log('test')
// variable that will hold our value of i
var total = 0;
// for loop since we know end condition. iterates to number 1000 by 1 int. 
for (var i = 0; i <= 1000; i++) {
	if ( i % 3 === 0|| i % 5 === 0) {
        // stores and consecutively adds value of i to total through each iteration
		console.log(total += i)
	}
}
//'total' value will appear via alert box. sum of every int between 1000 evenly devisible by 3 OR 5 will show. 
alert(total);
