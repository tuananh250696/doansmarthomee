angular.module('myApp', [
    'ngRoute',
    'mobile-angular-ui',
	'btford.socket-io'
]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'home.html',
        controller: 'Home'
    });
}).factory('mySocket', function (socketFactory) {
	var myIoSocket = io.connect('/webapp');	//Tên namespace webapp

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});
	return mySocket;
	
/////////////////////// Những dòng code ở trên phần này là phần cài đặt, các bạn hãy đọc thêm về angularjs để hiểu, cái này không nhảy cóc được nha!
}).controller('Home', function($scope, mySocket) {
	////Khu 1 -- Khu cài đặt tham số 
    //cài đặt một số tham số test chơi
	//dùng để đặt các giá trị mặc định

	$scope.buttons = [] //chả có gì cả, arduino gửi nhiêu thì nhận nhiêu!
      	$scope.se=[2]
	////Khu 2 -- Cài đặt các sự kiện khi tương tác với người dùng
	//các sự kiện ng-click, nhấn nút
	$scope.updateSensor  = function() {
		mySocket.emit("RAIN")
	}
	
	$scope.upt5  = function(){
		mySocket.emit("1")
	}
	$scope.upt51  = function(){
		mySocket.emit("2")
	}
	$scope.upt6  = function(){
		mySocket.emit("3")
	}
	$scope.upt61  = function(){
		mySocket.emit("4")
	}
	$scope.upt7  = function(){
		mySocket.emit("5")
	}
	$scope.upt71  = function(){
		mySocket.emit("6")
	}
	$scope.upt8  = function(){
		mySocket.emit("7")
	}
	$scope.upt81  = function(){
		mySocket.emit("8")
	}
	
	//Cách gửi tham số 1: dùng biến toàn cục! $scope.<tên biến> là biến toàn cục
	
		
});
