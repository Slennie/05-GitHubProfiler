(function() {
    'use strict';

    angular
        .module('app')
        .controller('GithubController', GithubController);

    GithubController.$inject = ['$http'];



    function GithubController($http) {
        var vm = this
        vm.callGithubApi = callGithubApi;
        vm.sling = '';

        ////////////////////

        function callGithubApi() {
            $http
                .get('http://api.github.com/users/' + vm.username + '?access_token=d9b1ce78b72a2459d70d4286fc0020140e276549')

            .then(function(response) {
                vm.data = response.data
                vm.sling = 'slinging code since ';

            })


            .catch(function(error) {
                alert('and error occured downloading' + vm.username + ' from GitHub')
            });
        }
    }

})();

//d9b1ce78b72a2459d70d4286fc0020140e276549 github token




/*.then(function(response) {
                        vm.data = response.data;
                        vm.sling = 'slinging code since ';
                        vm.hire = vm.github.data.hireable;
                        if (vm.hire == null) {
                            vm.hirestat = 'not looking for work';
                            vm.hirecol = 'text-danger';
                        } else {
                            vm.hirestat = 'looking for work';
                            vm.hirecol = 'text-success';
                        }
*/
