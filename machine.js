function Machine(power) {
      this._enabled = false;

      this.enable = function() {
        this._enabled = true;
      };

      this.disable = function() {
        this._enabled = false;
      };
    };


    function CoffeeMachine(power) {
      Machine.apply(this, arguments);

      var waterAmount = 0;

      this.setWaterAmount = function(amount) {
        waterAmount = amount;
      };

      function onReady() {
        alert('Кофе готов!');
      };

        var time;
      this.run = function() {
        if (!this._enabled) {
          throw new Error("Кофеварка выключена");
        };
       time = setTimeout(onReady, 1000);
      };
      var parent_disable = this.disable
        this.disable = function () {
          parent_disable.call(this);
          clearTimeout(time);

        }
    };

    var coffeeMachine = new CoffeeMachine(10000);
    coffeeMachine.run();


    //__________________________________________________________
    function Fridge(power) {
      Machine.apply(this, arguments);
      var food = [];
      this.addFood = function (item) {
        if (!this._enable) {
          throw new Error("Холодильник выключен");
        } else {
          food.push(arguments);
          };
      };
      this.food_limit = function () {
        this.power/100
        
      }

      
    }