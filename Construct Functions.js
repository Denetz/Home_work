// Функция конструктор аккумулятора

function Accumulator(startingValue) {
 	var value = startingValue;
 	var x,y;
 	this.read = function () {
 		x = +prompt ('x ?');
 		y = +prompt ('y ?');
 		if (isNaN(x)||isNaN(y)){          //проверка на Nan.
 			alert('Введите ЧИСЛА.');
 			return this.read();
 		}else {value = value + x + y;}
 		};
 	this.getValue = function () {
 		return value;
 		};
 };
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.getValue();




// Функция конструктор аккумулятора

function Accumulator(startingValue) {
 	var value = startingValue;
 	var x,y;
 	this.read = function () {
 		x = +prompt ('x ?');
 		y = +prompt ('y ?');
 		return this.validationFunc ();
 		};
 		this.validationFunc = function() {
			if (isNaN(x)||isNaN(y)){          //проверка на Nan.
 			alert('Введите ЧИСЛА.');
 			return this.read();
 				}else {value = value + x + y;}
		};
 	this.getValue = function () {
 		return value;
 		};
 };
var accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
accumulator.getValue();