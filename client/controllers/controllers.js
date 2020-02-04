myApp.controller('empController', function($scope,$route,$routeParams,$http,$cookies,$location,$rootScope){

	$scope.alert=function(){
	$scope.budget=500;
}

$scope.getInfo = function(){
		$http.get('/api/contacts/').then(function(response){
			$scope.contacts = response.data;
		});
	};
	$scope.showInfo = function(){
		var id = $routeParams.id;
		$http.get('/api/contacts/'+ id).then(function(response){
			$scope.contact = response.data;
		});
	};
	$scope.addInfo = function(){
		//var id = $routeParams.id;
		$http.post('/api/contacts/', $scope.contact).then(function(response){
			//$scope.employee = response.data;
		$route.reload();
		});
	};
	$scope.updateInfo = function(){
		var id = $routeParams.id;
		$http.put('/api/contacts/'+ id , $scope.contact).then(function(response){
			//$scope.employee = response.data;
			$route.reload();
		});
	};
	$scope.deleteInfo = function(id){
		var id = id;
		$http.delete('/api/contacts/'+ id).then(function(response){
			$route.reload();
		});
	};

	$scope.signIn=function(){
	  $http.post('/api/admin/login',{username: $scope.username,password:$scope.password}).then(function(response){
    console.log(response);
		$cookies.put('token',response.data.token);
		$cookies.put('currentUser', $scope.username);
		$rootScope.token=response.data.token;
		$rootScope.currentUser=$scope.username;
		alert('successfully sign in');
		$location.path('/info');
  },function(err){
		alert('bad login credentials');
	});
	};

	$scope.signUp = function(){
	$http.post('/api/users/register', $scope.user).then(function(response){
		$route.reload();
		alert('registration successfully');
	});
};

$scope.logIn=function(){
$http.post('/api/users/login',{username: $scope.username,password:$scope.password}).then(function(response){
    console.log(response);
		$cookies.put('token',response.data.token);
		$cookies.put('currentUser', $scope.username);
		$rootScope.token=response.data.token;
		$rootScope.currentUser=$scope.username;
		alert('successfully sign in');
		$location.path('/list');
  },function(err){
		alert('bad login credentials');
	});
};


$scope.logout=function(){
$cookies.remove('token');
$cookies.remove('currentUser');
$rootScope.token=null;
$rootScope.currentUser=null;
}


$scope.addcomment = function(){
	$http.post('/api/comments/comment', $scope.comment).then(function(response){
	$route.reload();
	});
};

$http.get('/api/comments/').then(function(response){
		$scope.com=response.data;
	})


	$scope.getone = function(){
		$http.get('/api/ones/').then(function(response){
			$scope.one = response.data;
		});
	};


	$scope.gettwo = function(){
		$http.get('/api/twos/').then(function(response){
			$scope.two = response.data;
		});
	};

	$scope.getthree = function(){
		$http.get('/api/threes/').then(function(response){
			$scope.three = response.data;
		});
	};

});

myApp.controller('AppController', function($scope,$http,$route,$location,$routeParams){
		$scope.product={};
		$scope.submit=function(){
			var formData=new FormData;

			for(key in $scope.product){
				formData.append(key, $scope.product[key]);
			}

			var file=$('#file')[0].files[0];
			formData.append('image',file);


   $http.post('/api/products/',formData,{
		 transformRequest:angular.identity,
		 headers:{
			 'Content-Type':undefined
		 }
	 }).then(function(res){
     	$route.reload();
	 });

		}
		$scope.getdata = function(){
		$http.get('/api/products/',{
			transformRequest:angular.identity,
 		 headers:{
 			 'Content-Type':undefined
 		 }
		}).then(function(response){
			$scope.item = response.data;
		});
	};
	});
