(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$injector = ['ShoppingListCheckOffService'];
  function ToBuyController( ShoppingListCheckOffService ){
    var showList = this;


    showList.items = ShoppingListCheckOffService.getToBuyList();

    showList.transferItemToBoughtList = function (itemIndex, name, quantity) {
      ShoppingListCheckOffService.transferItemToBoughtList(itemIndex, name, quantity);
    }
  }

  AlreadyBoughtController.$injector = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController( ShoppingListCheckOffService ){
    var boughtList = this;

    boughtList.items = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var ToBuyList = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Bread",
        quantity: "6"
      },
      {
        name: "Sugar",
        quantity: "1"
      },
      {
        name: "Chocolate",
        quantity: "10"
      },
      {
        name: "Gum",
        quantity: "2"
      }
    ]

    var boughtList = []

    service.getToBuyList = function () {
      return ToBuyList;
    }

    service.getBoughtList = function () {
      return boughtList;
    }

    service.transferItemToBoughtList = function (itemIndex, name, quantity) {
      ToBuyList.splice(itemIndex, 1);
      var item = {
        name: name,
        quantity: quantity
      };
      boughtList.push(item);
    }

  }

})();
