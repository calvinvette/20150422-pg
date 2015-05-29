angular.module('tApp').directive('qmEscape', function() {
  return function(scope, elem, attr) { // NOT INJECTED!
      elem.bind('keyup', function(evt) {
        if (evt.keyCode == 27) {
          scope.$apply(function() {
            scope.$eval(attr.qmEscape);
          });
          evt.preventDefault();
        }
      });
    }
});
