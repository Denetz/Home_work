function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
}
function createArray(size) {
   var res = [];
   for (var i = 0; i < size; i++) {
	   res[i] = [];
	   for (var j = 0; j < size; j++) {
		   res[i][j] = randomInteger(0, 100);
	   }
   }
   return res;
}

var array = createArray(10);

console.table(array);

function square (array) {
   var sq = [];
		for (var i = 0; i<array.length;i++){
			sq.push(array[0][i]);
		};
		for (var i = 1; i<array[0].length;i++){
			sq.push(array[i][array[i].length-1]);
		};
		for (var i = array[array.length-1].length-2; i>=0;i--){
		  sq.push(array[array.length-1] [i]);
		};
		for (var i = array.length-2; i>=1;i--){
		  sq.push(array[i] [0]);
		};

  return sq;
}
square (array);

console.table(array);

function squareRev (array) {
   var sqr = [];
		for (var i = 0; i<array.length;i++){
			sqr.push(array[i][0]);
		};
		for (var i = 1; i<array[array.length-1].length;i++){
			sqr.push(array[array.length-1][i]);
		};
		for (var i = array.length-2; i>=0;i--){
		  sqr.push(array[i] [array[i].length-1]);
		};
		for (var i = array[0].length-2; i>=1;i--){
		  sqr.push(array[0] [i]);
		};

  return sqr;
}
square_Rev (array);

function mainDiagon (array) {
	// debugger;
	var sqr = [];
	for (i = 0; i<array.length;i++){
		sqr.push(array[0][i]);
	};
	for (var i = 1; i<array[0].length;i++){
			sqr.push(array[i][array[i].length-1]);
		};
	for (var i = array[array.length-2].length-2; i>=0;i--){
		sqr.push(array[i][i]); // диагональ
    };
  return sqr;
};


mainDiagon (array);

console.table(array);

function secDiagon (array) {
	// debugger;
	var sqr = [];
	// for (i = 0; i<array.length;i++){
	// 	sqr.push(array[i][0]);
	// };
	for (var i = array[0].length-1; i>array.length;i--){
		sqr.push(array[i][i]); // диагональ
    };
	// for (var i = array[array.length-2].length-1; i<array.length-1;i++){
	// 		sqr.push(array[i][array[i].length-1]);
	// 	};
  return sqr;
};

secDiagon (array);

// ______________________________________________


// 	дз - пофиксить код через замыкание


// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//      console.log('I am ' + i + ' iteration')
//   }, 1000);
// }

// ___________________________
// function makeArmy() {
//   var shooters = [];
//   for(var i=0; i<10; i++) {
//     var shooter = function() {
//       alert(i); 
//     };
//     shooters.push(shooter);
//   }
//   return shooters;
// }
// var army = makeArmy();
// var shooters = [];

//   for(var i = 0; i < 3; i++) {
//     var shooter = function(index) {
//       return function () {
//          alert(index);
//       };
//     };
//     shooter(i);
//     shooters.push(shooter);
//   }

// shooters[0]();



// 	дз - пофиксить код через замыкание


// ____________________


	for (var i = 0; i < 3; i++) {
		setTimeout(function () {
			return console.log('I am ' + i + ' iteration');
		},100);
	};

