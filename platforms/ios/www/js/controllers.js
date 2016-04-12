angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
    $scope.items = [];
    $scope.items[0] = [];
    $scope.items[0].push({ key:"vip", title:"VIP顾客报表", icon:"img/icon1.png"});
    $scope.items[0].push({ key : "elitedirtravel", title : "精英经销商海外游", icon:"img/icon1.png"});
    $scope.items[0].push({ key : "eliteallowance", title : "精英美容顾问培训补贴", icon: "img/icon1.png"});
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
