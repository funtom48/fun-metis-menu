angular
    .module('myApp', ['funMetisMenu'])
    .controller('MyCtrl', function($scope) {
        $scope.items = [
            ["first", ["test1", "test2", "test3"]],
            ["second", ["test1", "test2", "test3"]],
        ];
        $scope.metis = {
            config: {
                toggle: true,
            },
            events: [{
                type: 'hide.metisMenu',
                callback: (event) => console.log("event", event)
            }]
        };
    });
