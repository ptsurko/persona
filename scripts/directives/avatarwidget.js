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
        $('.avatarEditor-uploadBtn', element).click(function() {
          $('.avatarEditor-uploadFile', element).click();
        });
        $('.avatarEditor-uploadFile', element).change(function(e) {
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
          element.removeClass('avatar-photo--fitWidth');
          element.removeClass('avatar-photo--fitHeight');

          var width = e.target.naturalWidth;
          var height = e.target.naturalHeight;
          if (width > height) {
            element.addClass('avatar-photo--fitWidth');
          } else if (width < height) {
            element.addClass('avatar-photo--fitHeight');
          }
          element.removeClass('hide');
        });
      }
    }
  }]);
