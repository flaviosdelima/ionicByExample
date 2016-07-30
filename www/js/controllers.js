angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

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

.controller('VideosCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('ApiVideosCtrl', function($scope, $stateParams, $http) {
  $scope.videos = [];
    $scope.theBestVideo = 'sMKoNBRZM1M';
    $scope.youtubeParams = {
          key: 'AIzaSyAVC9T0gZYFBetXf8kQVftrGxjDjjvg-Gc',
          type: 'video',
          maxResults: '5',
          part: 'id,snippet',
          //q: 'YOUR SERACH KEYWORDS',
          order: 'date',
          channelId: 'UC8A8FgU36hZmhUM_-Wi-hDw',
        }
        var  i = 0;
        $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.youtubeParams}).success(function(response){
          angular.forEach(response.items, function(child){
              $scope.videos.push(child);
              
              if(i==0)
              {
                $scope.theBestVideo = child.id.videoId;
                console.log ("Flavio "+$scope.theBestVideo);
              }
              i = i+1;
            console.log (child);
            
          });
        });
        
  $scope.playerVars = {
  rel: 0,
  controls:0,
  ps:"docs",
  theme:"light",
  iv_load_policy:3,
  modestbranding:1,
  nologo:1,
  hl:"pt_BR",
  showinfo:0
}

})


.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
