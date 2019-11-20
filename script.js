var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
  
  $scope.herhisit = [
          {option: 'Her'},
          {option: 'His'},
          {option: 'Its'},
          ];
          
  $scope.story1 = false;
  
});

app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
    input = input.toLowerCase();
    return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});

app.directive('story', function() {
    return {
      restrict: 'E'
    };
  });

app.directive('noun', 'pronoun', 'adjective', 'verb', 'adverb', 'name', 'place', 'country', 'word', function() {
    return {
      restrict: 'E'
    };
  });
  
$(document).ready(function(){

$("story.one").hide();
$("story.two").hide();
  
$(".showstory1").click(function(){
    $("story.one").show();
    
});
  
$(".showstory2").click(function(){
    $("story.two").show();
    
});

});

