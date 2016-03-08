function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  var time;
  this.run = function() {
   time = setTimeout(onReady, getBoilTime());
  };

    this.stop = function () {
        clearTimeout(time);
        console.log('НЕ сегодня!')
    };

};

