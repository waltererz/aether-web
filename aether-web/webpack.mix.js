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

mix.setPublicPath('./build').options({ runtimeChunkPath: './js/common' });

mix.js('resources/js/index.jsx', './js/app.js')
   .js('resources/js/landing.jsx', './js/landing.js')
   .react().version();

mix.extract(['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'axios', 'universal-cookie'], './js/common/chunk.1.js')
   .extract(['@material-ui/core', '@material-ui/icons', '@material-ui/styles', '@emotion/react', '@emotion/styled'], './js/common/chunk.2.js')
   .extract(['@popperjs/core', '@ckeditor/ckeditor5-build-classic', '@ckeditor/ckeditor5-react'], './js/common/chunk.3.js')
   .extract({
      to: './js/common/chunk.a.js'
   });