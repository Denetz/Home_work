function sumTo(n){
	x=n;
	// debugger;
	if (n!=1) {
		console.log(n);
		 return x + sumTo(n-1);
	} else {
		return n;
 	}

}

sumTo (4) ;

function factor (n) {
	x=n;
	if (n!=1) {
		console.log(n);
		return x * factor(n-1);
	} else {
		return n;
	}
}