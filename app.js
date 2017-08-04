var app = angular.module('thatFakeReddit',[]);

app.controller('MainCtrl',[
    '$scope',
    function($scope){
        $scope.mainVar = 'Hello pham, welcome to TFR';
        
        $scope.posts = [
            {title: 'post 1', upvotes:15},
            {title: 'post 2', upvotes:522},
            {title: 'post 3', upvotes:124},
            {title: 'post 4', upvotes:23},
            {title: 'post 5', upvotes:22},
        ];
        
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

