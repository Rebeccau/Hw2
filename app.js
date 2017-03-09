(function () {
  'use strict';

  angular.module( 'LunchCheck', [] )
  .controller( 'LunchCheckController', LunchCheckController);

  LunchCheckController.$injector = ['scope'];
  function LunchCheckController( $scope ){
    $scope.menu;
    $scope.outputMessage;
    $scope.checkMenu = function () {
      var menu;
      var numOfItems;
      menu = $scope.menu

      if( menu ){
        numOfItems = menu.split(',').length;

        if( numOfItems <= 3 ){
          $scope.outputMessage = "Enjoy!";
        }else{
          $scope.outputMessage = "Too much!";
        }

      }else{
        $scope.outputMessage = "Please enter data first";
      }
    }
  }

})();
