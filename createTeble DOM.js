
// Random Gen Numbers.

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
};

// Create Table NхN size.

function createTable(size, parent) {
   size = size || 10;  					// зачем тут 10 ?
   parent = parent || document.body;
   for(var i = 0; i < size; i++){
   		var td = document.createElement ('td');
   		for (var j = 0; j < size; j++) {
	   		var tr = document.createElement('tr');
	   		tr.textContent = randomInteger(0, 100);
	   		td.appendChild(tr);
	   	};
   		parent.appendChild(td);
   };
	return parent;
   };

createTable (10,document.createElement ('table'));




// написать таблицу в виде конкатинации строки   все будет длинной стракой.
//Взять паррента   и у паррента все будет иннер хтмл.  создать таблицу через inner HTML.
// Сделать то же самое, но с помощью innerHTML
// т.е. var str = ‘<table><tr><td>test</td>…… </table>’
// parentEl.innerHTML = str

// Random Gen Numbers.

function randomInteger(min, max) {
  var rand = min + Math.random() * (max - min)
  rand = Math.round(rand);
  return rand;
};

// Create Table NхN size.  As string.

function createTable(size, parent) {
   size = size || 10;
   parent = parent || document.body;
   var str = parent;
   for(var i = 0; i < size; i++){
   		var td = document.createElement ('td');
   		for (var j = 0; j < size; j++) {
	   		var tr = document.createElement('tr');
	   		tr.textContent = randomInteger(0, 100);
	   		str += tr;									//Почему тут  нет значения,  а должно срабаотывать randomInteger.
	   	};
   		str += td;
   };
	return str;
   };

   createTable (4,document.createElement ('table'));




//_________________Example._______________________________________________

// function createList(size, parent) {
//    size = size || 10;
//    var ul = document.createElement ('ul');
//    parent = parent || document.body;
//    for (var i = 0; i < size; i++) {
// 	   var li = document.createElement('li');
// 	   li.textContent = randomInteger(0, 100);  //Рандомное что либо.
// 	   ul.appendChild(li);
// 	   };
// 	parent.appendChild(ul);
//    };
