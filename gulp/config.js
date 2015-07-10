
module.exports = {
  scripts: {
    src: 'app/js/**/*.js',
    dest: 'build/js',
    third_party: {
      src: [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/jquery-ui/ui/minified/core.min.js',
        'bower_components/jquery-ui/ui/minified/widget.min.js',
        'bower_components/jquery-ui/ui/minified/mouse.min.js',
        'bower_components/jquery-ui/ui/minified/sortable.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-sortable/sortable.js',
        'bower_components/d3/d3.min.js',
        'bower_components/bootstrap-toggle/js/bootstrap-toggle.js',
        'node_modules/d3-transform/src/d3-transform.js'
      ],
      dest: 'build/js/third_party'
    }
  },
  styles: {
    src: 'app/less/**/*.less',
    dest: 'build/css',
    third_party: {
      src: [
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/bootstrap-toggle/css/bootstrap-toggle.css',
        'bower_components/font-awesome/css/font-awesome.css'
      ],
      dest: 'build/css'
    }
  },
  images: {
    src: 'app/images/**/*',
    dest: 'build/images'
  },
  fonts: {
    src: [
      'app/fonts/**/*',
      'bower_components/font-awesome/fonts/**/*',
    ],
    dest: 'build/fonts'
  },
  views: {
    src: 'app/**/*.html',
    dest: 'build'
  },
  dist: {
    root: 'build'
  }
};
