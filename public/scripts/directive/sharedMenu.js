loginApp.directive('globalview',function(){
  return {
    restrict: 'E',
    templateUrl: function(tElement,tAttrs){
        return tAttrs.templateUrl ? tAttrs.templateUrl : 'pages/shared/sharedMenu.html'; 
    }
  };
});