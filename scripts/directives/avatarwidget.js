angular.module('Persona')
  .directive('prAvatarView', [function() {
    return {
      restrict: 'EA',
      replace: true,
      template: '<div class="avatar">' +
                '  <img class="avatar-photo" data-ng-src="{{model.avatarUrl}}"></img>' +
                '</div>',
    };
  }])
  .directive('prAvatarEdit', [function() {
    return {
      restrict: 'EA',
      require: 'prAvatarEdit',
      replace: true,
      template: '<div class="avatar-editor">' +
                '  <img class="avatar-photo" data-ng-src="{{model.avatarUrl}}"></img>' +
                '  <input class="avatar-editor-upload-file" type="file">' +
                '  <button class="btn btn-default avatar-editor-upload-btn">...</button>' +
                '</div>',
      controller: ['$scope', function($scope) {
        this.uploadAvatar = function(file) {
          var fr = new FileReader();
          fr.onload = function () {
            $scope.$apply(function() {
              $scope.model.avatarUrl = fr.result;
            });
          }
          fr.readAsDataURL(file);
        };
      }],
      link: function(scope, element, attrs, ctrl) {
        $('.avatar-editor-upload-btn', element).click(function() {
          $('.avatar-editor-upload-file', element).click();
        });
        $('.avatar-editor-upload-file', element).change(function(e) {
          var target = e.target;
          var files = target.files;

          if (FileReader && files && files.length) {
            scope.$apply(function() {
              ctrl.uploadAvatar(files[0]);
            });
          }
        });
      }
    };
  }]);
