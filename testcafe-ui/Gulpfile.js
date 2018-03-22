const gulp = require('gulp');
const clean = require('gulp-clean');
const testcafe = require('gulp-testcafe');
var fs = require('fs');

gulp.task('clean', function () {
    return gulp.src('./screenshots')
        .pipe(clean({force: true}))
});

gulp.task('run-scripts', () => {
    return gulp
        .src('test/specs/*.js')
        .pipe(testcafe({ 
        	browsers: ['chrome'],
        	takeScreenshotsOnFail : true,
            screenshotsPath : './screenshots',
            reporter: [{ name: 'xunit', outStream: fs.createWriteStream('reports/report.xml') }, 'spec']
        }));
});

gulp.task('default', ['clean', 'run-scripts'], function() {}); 
