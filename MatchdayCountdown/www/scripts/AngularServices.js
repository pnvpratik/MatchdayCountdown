app.provider('myPageCtx', function () {

    var defaultCtx = {
        HeaderTitle: 'Next game',
        ActiveFooterIcon: 'home',
        
    };

    var currentCtx = angular.copy(defaultCtx);

    return {
        $get: function ($rootScope) {

            // We probably want to revert back to the default whenever
            // the location is changed.

            $rootScope.$on('$locationChangeStart', function () {
                angular.extend(currentCtx, defaultCtx);
            });

            return currentCtx;
        }
    };
});