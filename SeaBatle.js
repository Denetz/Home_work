
// перивести названия функций к такому виду  this.field и пт. все это обернуть в функию конструктор BatleField.

//  Функция по созданию поля.
function Obj() {
	this.chip=false;
	this.opened=false;
	this.msg = "Промазал!";
};

	var res = [];
function field () {
	var x = +prompt('Введите ширину поля');
	var y = +prompt('Введите высоту поля');
	for (var i = 0; i<x; i++) {
		res [i] = [];
		for (var j = 0; j<y; j++) {
			debugger;
			res [i][j] = Obj();
		};
	};
	return res;
	};
	this.getRes = function () {
		return res;
};

// функция размещения кораблей.
function putChip (x,y) {
	res [x][y]=chip=true;
}




// Обернуть морской бой в функцию конструктор  с приватными и публичными свойствами.
