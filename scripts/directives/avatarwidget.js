angular.module('Persona')
  .directive('prAvatarView', [function() {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'templates/avatar-view.html',
    };
  }])
  .directive('prAvatarEdit', [function() {
    return {
      restrict: 'EA',
      require: 'prAvatarEdit',
      replace: true,
      templateUrl: 'templates/avatar-edit.html',
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
  }])
  .directive('prAvatarFit', [function() {
    return {
      restrict: 'EA',
      link: function(scope, element, attrs) {
        element.addClass('hide');
        element.on('load', function(e) {
          element.removeClass('avatar-photo-fit-width');
          element.removeClass('avatar-photo-fit-height');

          var width = e.target.naturalWidth;
          var height = e.target.naturalHeight;
          if (width > height) {
            element.addClass('avatar-photo-fit-width');
          } else if (width < height) {
            element.addClass('avatar-photo-fit-height');
          }
          element.removeClass('hide');
        });
      }
    }
  }]);
