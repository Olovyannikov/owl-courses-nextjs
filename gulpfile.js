const gulp = require('gulp');
const {src, dest, series, parallel} = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const gulpClean = require('gulp-clean');

const clean = () => gulp.src([
    './build',
    'src/client/generated'

], {read: false,allowEmpty : true}).pipe(gulpClean());

const svgSprites = () => {
    return src(["src/client/resources/img/svg/**.svg"])
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg" //sprite file name
                }
            },
        }))
        .pipe(dest(["src/client/resources/img/sprite/"]));
}

exports.default = series(
    clean,
    svgSprites
)