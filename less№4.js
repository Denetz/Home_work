var a=10,
	b=20;

var a=a+b,
	b=a-b,
	a=a-b;


	///_________________________

	var a = 10; b = 30; c = 20;
	if (b > a && b > c && c>a)
	{
  		console.log(b*10);
		console.log(c*5);
	}else  if (a>c && a>b && b>c) {
		console.log(a*10);
		console.log(b*5);
	}else if (c>b && c>a && a>b) {
		console.log(c*10);
		console.log(a*5);
	}
 console.log(a,b,c);
