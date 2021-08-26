//multiples funciones con llaves
const {series,src,dest}= require('gulp');
//con solo una funcion no utilizamos llaves
const sass = require('gulp-sass')(require('sass'));




//Funcion que compilas sass
// el argumento que recibira la funcion sera lo que utilizaremos para cuando termine nuestra funcion
function css()
{

    // le pasaremos la funncion o un paquete que hayamos importado
return src('src/scss/app.scss')
.pipe(sass({outputStyle: 'compresed'}))
.pipe(dest('./build/css'))
}


exports.css=css;