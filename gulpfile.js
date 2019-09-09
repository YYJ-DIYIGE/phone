const { src, dest, parallel, watch } = require('gulp');
const less = require('gulp-less');

function style(){
  return src('css/*.less')
    .pipe(less())
   
    .pipe(dest('./css'));
}
function watchAll() {
  return watch('./**', parallel( style))
}
exports.style = style;
exports.default = watchAll;