angular.module("Vitrine", [])
.controller("VitrineCTRL", function($scope){
$scope.select=0;
$scope.selection= function(){
  $scope.select=1;
}
$scope.selection0 = function(){
  $scope.select=0;
}

$scope.selectionJava= function(){
  $scope.select=2;
}

$scope.selectionHTML= function(){
  $scope.select=3;
}

$scope.selectionC= function(){
  $scope.select=4;
}

$scope.selectionJS= function(){
  $scope.select=5;
}

$scope.selectionGIT= function(){
  $scope.select=6;
}
$scope.selectionMAV= function(){
  $scope.select=7;
}
$scope.selectionNB= function(){
  $scope.select=8;
}
$scope.selectionAt= function(){
  $scope.select=9;
}
$scope.selectionCB= function(){
  $scope.select=10;
}
$scope.selectionPAMC= function(){
  $scope.select=11;
}
$scope.selectionSQLD= function(){
  $scope.select=12;
}
$scope.selectionWin= function(){
  $scope.select=13;
}
$scope.selectionLin= function(){
  $scope.select=14;
}
})
