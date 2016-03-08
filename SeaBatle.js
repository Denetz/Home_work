// перивести названия функций к такому виду  this.field и пт. все это обернуть в функию конструктор BatleField.

// Обернуть морской бой в функцию конструктор  с приватными и публичными свойствами.

function SeaBatle() {
	var chip, opened, msg;
	var res = [];
	var chipsCount = 0;

	// конструктор пустых объектов.
	this.function Obj() {
		this.chip = false;
		this.opened = false;
		this.msg = "Промазал!";
	};

	//  Функция по созданию поля.
	this.function field() {
		var x = +prompt('Введите ширину поля'); //Нужно ли оборачивать  объявление переменных  и проверку в отдельную функцию. Которая будет возвращать нас в field (). ?
		var y = +prompt('Введите высоту поля');
		if (isNaN(x) || isNaN(y)) {
			alert("Введите числа!");
		};
		for (var i = 0; i < x; i++) {
			res[i] = [];
			for (var j = 0; j < y; j++) {
				res[i][j] = new Obj();
			};
		};
		return res;
	};
	this.getRes = function() {
		return res;
	};

	// функция размещения кораблей.
	this.function putChip(x, y) {
		res[x][y].chip = true; // сначала создастся переменная chip, глобальная, ей присвоится тру, а потом res [x][y] получит значение этой переменной chip
		res[x][y].opened = true;
		res [x][y].msg = "Попал!";
		chipsCount = chipsCount + 1;
	};


	// setMsg (7,8,'msg'); //меняет сообзение во время выстрела.
	// ________________по этим координатам необходимо изменить сообщение (msg).  не Срабатывает, проблема в синтаксисе msg ?.
	this.function setMsg(x, y, msg) {
		res[x][y].msg = "msg";
	};

	// hit (9,10); // выводит сообщение о подбитии корабля.
	this.function hit(x, y) {
		coordChek(x, y); // не протестировано.
		if (res[x][y].chip == true) {
			alert("Попал!")
			res[x][y].opened == false;
			chipsCount = chipsCount - 1;
			// необходимо реализовать закрытие клетки  после подбития корабля.
		} else {
			alert(res[x][y].msg);
		}
	};


	// ___________  Сообщение "таких кооржинат не существует!"
	this.function coordChek(x, y) {
		if (x < 0 || y < 0) {
			alert("Таких координат не существует!");
		};
		if (x > res[x].length || y > res[y].length) {
			alert("Таких координат не существует!");
		}; // просто взять ленгтс массива + проверка на [0].
	};

	// _________ Проверка оставшихся кораблей.

	// проверка оставшихся кораблей.
	this.function hasChips() {
		alert(chipsCount);
	};



	// использовать наследование  для обращения и работы с полем ? ? !!

};