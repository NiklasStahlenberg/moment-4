const {src, dest, watch, series, parallel} = require("gulp");
const del = require('del');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const browsersync = require('browser-sync');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');

//The filepaths i use in the project
const files = {
    htmlPath: "src/**/*.html",
    scssPath: "src/scss/**/*.scss",
    jsPath: "src/js/*.js",
    imgPath: "src/images/*"
}

//Copies the html-files to a folder named pub
function copyHTML(){
    return src(files.htmlPath)         
        .pipe(dest('pub')                        
    );
}

//Task for minifying and concat css files, then put them in pub/css
function scssTask(){
    return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(dest('pub/css'))            
}

//task for concating and minifying js files and then put them in pub/js
function jsTask(){
    return src(files.jsPath)           
        .pipe(concat('main.js')) 
        .pipe(terser())   
        .pipe(dest('pub/js'))           
}

//copies images to pub/images
function copyImages(){
    return src(files.imgPath)
    .pipe(dest('pub/images'))
}

//watch task that enables browsersync for live reloading, also watches all filepaths for changes
function watchTask(){
    browsersync.init({
        server: {
            baseDir: 'pub/'
        }
    });       
        watch ([files.htmlPath, files.scssPath, files.jsPath, files.imgPath],            
            parallel (copyHTML, scssTask, jsTask, copyImages)).on('change', browsersync.reload);        
}

//a function that deletes the pubfolder before the other code is run
async function delete_pub(cb){
    deletedPaths = await del('pub');    
    console.log('deleted pub-catalog');
    cb();
}

//this is what will happen when gulp is started
exports.default = 
    series (delete_pub,
        parallel (copyHTML, scssTask, jsTask, copyImages),
        (watchTask),        
    ); 