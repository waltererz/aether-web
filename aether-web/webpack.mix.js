const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({ runtimeChunkPath: './js/extract' });

mix.js('resources/js/index.jsx', './js/app.js')
   .js('resources/js/landing.jsx', './js/landing.js')
   .js('resources/js/admin.jsx', './admin/js/app.js')
   .react().version();

mix.extract(['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'axios', 'universal-cookie'], './js/extract/chunk.1.js')
   .extract(['@material-ui/core', '@material-ui/icons', '@material-ui/styles', '@emotion/react', '@emotion/styled'], './js/extract/chunk.2.js')
   .extract(['@popperjs/core', '@ckeditor/ckeditor5-build-classic', '@ckeditor/ckeditor5-react'], './js/extract/chunk.3.js')
   .extract({
      to: './js/extract/chunk.a.js'
   });