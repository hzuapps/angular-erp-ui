myAppModule.filter('stripDashes', function () {
    // the function we are in returns
    // the function below
    return function(txt) {
        return textToFilter.split('-').join(' ');
    };
});
