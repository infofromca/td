
mainApp.controller('FormController', function ($scope) {
    $scope.FirstHeader = "Tell us about yourself";
    $scope.Para = "Thanks for choose TD insurance! In order to saftly set up your accounts and seivices, please tell us about yourself.";
    $scope.SecondHeader = "Personal Information";
    $scope.reset = function () {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.email = "";
        $scope.middleName = "";
        $scope.dob = "";
        $scope.sin = "";
        return;
    }

    $scope.reset();
});