
//Wrap entire application in a closure. This is good practice in JavaScript.
(function(){
  var app = angular.module('store', []);

  //controller
  app.controller('StoreController', function(){
    this.product = gem;

  });

  var gem = {
    name: 'Dodecahedron',
    price: 2.95,
    description: 'A really awesome bar of soap!'
  }

})();
