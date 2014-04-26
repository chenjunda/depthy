'use strict';

angular.module('depthyApp')
.controller('ExportModalCtrl', function ($scope, $modalInstance, depthy, $sce) {
  $scope.exportProgress = -1;
  depthy.exportAnimation().then(
    function exportSuccess(blob) {
      $scope.imageUrl = $sce.trustAsResourceUrl( URL.createObjectURL(blob) );
      console.log(URL.createObjectURL(blob));
      $scope.$safeApply();
    },
    function exportFailed() {
      $scope.exportError = 'Export failed';
    },
    function exportProgress(p) {
      $scope.exportProgress = p;
      $scope.$safeApply();
      // console.log(p)
    }
  );
});
