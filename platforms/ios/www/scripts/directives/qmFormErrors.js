angular.module('tApp')
.directive('qmFormErrors', function() {
  return {
	restrict: "AEC", // A for Attribute, E for Element, C for CSS class  
	transclude: true,
	/* Isolate scope 	
		'=' looks for a $scope variable
		'@' looks for an attribute value
		'&' is a function reference
		'^" is used in require="^..." to say we need to be inside of another directive
		
	*/
	scope: {
		fieldTitle : '@title',
		fieldVar : '@name',
		minlength : '@minlength',
		maxlength: '@maxlength'
	},
	link : function(scope, elem, attrs) { // NOT INJECTED!
		console.log("foo: " + attrs.qmFormErrors);
		console.log("minlength: " + scope.minlength);
	},
	templateUrl: "scripts/directives/qmFormErrors.html"
  }
});


/*
qm-form-errors="..." in a form field simplifies the span blocks to show errors

<form name="custRegForm" novalidate="novalidate">
<input
	type="text"
	ng-model="customer.firstName" 
	name="txtFirstName"
	id="txtFirstName"
	required="required" 
	minlength="2" 
	maxlength="25"
	pattern="[-A-Za-z ']*"
	title="First Name"
	 />

<span class="field-error" ng-show="custRegForm.txtFirstName.$touched && custRegForm.txtFirstName.$error.required">
		The First Name field is required.
</span>

<span class="field-error" ng-show="custRegForm.txtFirstName.$touched && custRegForm.txtFirstName.$error.pattern">
		The First Name field can only have letters, hyphens, spaces or apostrophies.
</span>

<span class="field-error" ng-show="custRegForm.txtFirstName.$touched && custRegForm.txtFirstName.$error.minlength">
		The First Name field must have at least two characters.
</span>

<span class="field-error" ng-show="custRegForm.txtFirstName.$touched && custRegForm.txtFirstName.$error.maxlength">
		The First Name field can have at most 25 characters.
</span>

	
*/