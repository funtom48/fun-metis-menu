( function ( angular ) {
	'use strict';
    /*
        Metis menu directive for AngularJS
        author: funtom48
    */
	var MetisMenuDirective = function ( $timeout ) {
		return {
			restrict: 'E',
			scope: {
				config: '=funMetisConfig',
				events: '=funMetisEvents'
			},
			link: function ( scope, element ) {
				console.log( scope );
				var menuElement = element.find( '> nav > ul' );
				menuElement.addClass( 'metismenu' );
				var config = scope.config || {};
				var events = scope.events || {};
				$timeout( function ( ) {
					var menu = menuElement.metisMenu( config );
					angular.forEach( events, function ( event ) {
						menu.on( event.type, event.callback );
					});
				});
			}
		};
	};

	angular.module('funMetisMenu', [ ]).directive('funMetisMenu', [ '$timeout', MetisMenuDirective ]);
})( angular );
