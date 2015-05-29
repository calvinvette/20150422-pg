angular.module('tApp').directive('qmEnter', function() {
  return function(scope, elem, attrs) { // NOT INJECTED!
      elem.bind('keyup', function(evt) {
        if (evt.keyCode == 13) {
          scope.$apply(function() {
            scope.$eval(attrs.qmEnter);
          });
          evt.preventDefault();
        }
      });
    }
});
