var promise = $http({method: 'POST', url: 'memberservices/register', data: theData});
promise.success(function (data, status, headers, config, statusText) {
    // this callback will be called asynchronously
    // when the response is available
});
promise.error(function (data, status, headers, config, statusText) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
});
