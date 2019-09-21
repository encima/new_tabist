const gulp = require('gulp');
const pug = require('gulp-pug');
const packageJson = require('./package.json');

gulp.task('pug', function(){
  return gulp.src('public/**/*.pug')
    .pipe(pug({
      locals: { package: packageJson },
      verbose: true,
      pretty: true
    }))
    .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['pug']);
