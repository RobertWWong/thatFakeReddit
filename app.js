var app = angular.module('thatFakeReddit',['ui.router']);

 
app.config(

    function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('home');
        
        $stateProvider
        .state('home',{
            url: '/home',
            templateUrl: '/home.html',
            })
        
        .state('about',{
            url: '/about',
            views: {
                '': {
                    templateUrl : 'home.html',
                    controller :    'MainCtrl'
                },
                
                'columnOne@about':  {template: 'LOOK AT ME PHAM'},
                
                'columnTwo@about':  {
                    templateUrl:    'posts.html',
                    controller:     'PostsCtrl'
                    }
                }
            });
        
        
//        $stateProvider
//            .state('home',{
//            url: '/home',
//            templateUrl: '/home.html',
//            controller: 'MainCtrl'
//            })
//        
//            .state('posts',{
//                url: '/posts/{id}',
//                templateUrl: '/posts.html',
//                controller: 'PostCtrl'
//            });
    }
);

app.factory('posts', [
    function(){
        var myObj = {
            posts : []
    };
    return myObj;
}]);


app.controller('MainCtrl',[
    '$scope',
    'posts',
    function($scope, posts){
        $scope.mainVar = 'Hello pham, welcome to TFR';
        
        $scope.posts = posts.posts;
        $scope.posts.push({
          title: $scope.dasPost,
          link: $scope.dasLink,
          upvotes: 0,
          comments: [
            {author: 'Joe', body: 'Cool post!', upvotes: 0},
            {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
          ]
        });
        
        $scope.addPost = function(){
            if ( !$scope.dasPost || $scope.dasPost ===''){
                console.log("that' aint posting pham, also === means eq w/out coercision. 1 == '1' is T. 1 === '1' is F");
                return;
            }
            $scope.posts.push( {title: $scope.dasPost,
                                link: $scope.dasLink,
                                upvotes: 0});
            $scope.dasPost = '';
            $scope.dasLink = '';
            console.log("we adding some stuff " + $scope.dasPost);
        };
        
        $scope.incrUpvote = function(post){
            post.upvotes +=1;
            console.log("yaaaaasssssssssss");
        };
    }
]);

app.controller('PostsCtrl', [
    '$scope',
    '$stateParams',
    'posts',
    function($scope, $stateParams, posts){
        
        $scope.post = posts.posts[$stateParams.id];
        
        $scope.addComment = function(){
          if($scope.body === '') { return; }
          $scope.post.comments.push({
            body: $scope.body,
            author: 'user',
            upvotes: 0
          });
          $scope.body = '';
        };    
}]);


