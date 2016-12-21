angular.module('myApp', ['funMetisMenu'])
.controller('MyCtrl', function($scope) {
    $scope.metis = {
        config: {
            toggle: true,
        },
        events: [{
            type: 'hide.metisMenu',
            callback: (event) => console.log("423523523", event)
        }]
    };
});
