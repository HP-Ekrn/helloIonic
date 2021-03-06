angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('Reports',function(){
  var reports = [
   [
      { key:"vip", title:"VIP顾客报表", icon:"img/1.png"},
      { key : "elitedirtravel", title : "精英经销商<br/>海外游", icon:"img/2.png"},
      { key : "eliteallowance", title : "精英美容顾问<br/>培训补贴", icon: "img/3.png"}
   ] ,
   [
      { key:"vip1", title:"VIP顾客报表1", icon:"img/4.png"},
      { key : "elitedirtravel1", title : "1精英经销商<br/>海外游", icon:"img/5.png"},
      { key : "eliteallowance1", title : "1精英美容顾问<br/>培训补贴", icon: "img/6.png"}
   ] 
  ]

  return {
    all:function(){return reports },
    get:function(key) {
        for(var i=0;i < reports.length;i++){
          for(var j=0;j<reports[i].length;j++){
            if(reports[i][j].key == key) return reports[i][j];
          }
        }
        return null;
    }
  }

})
