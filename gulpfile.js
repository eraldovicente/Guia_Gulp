// const gulp = require('gulp');

// gulp.task(); - tarefa
// gulp.src(); - origem
// gulp.dest(); - destino
// gulp.watch();

// gulp.task('myTask', () =>
//     gulp.src('./origem')
//         .pipe(plugin1)
//         .pipe(plugin2)
//         .pipe(plugin3)
//         .pipe(gulp.dest('./destino'))
// );

// gulp.watch('./origem', ['myTask']);

// gulp.task('default', () => {
//     gulp.watch('./origem', ['myTask']);
// });

const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

// ./scss/*.scss    - Busca por todos os arquivos com a extesão .scss
// ./scss/*/*.scss  - Busca em todos os diretorios filhos de scss arquivos com a extensão .scss
// ./scss/**/*.scss - Busca em todos os subdiretorios de scss por arquivos .scss 

gulp.task('sass', () =>
    gulp.src('./scss/*.scss')
        .pipe(sass({
            outputStyle: 'expanded', // ou 'compact' ou 'compressed' ou 'nested'
            sourceComments: true
        }))
        .pipe(autoprefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./css'))
);

// No gulp 4.x, você precisa passar uma função. A maneira usual de fazer isso no gulp 4.x é 
// passar uma gulp.series()invocação com apenas um nome de tarefa. Isso retorna uma função que
// executa apenas a tarefa especificada:

gulp.task('default', () => {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
});