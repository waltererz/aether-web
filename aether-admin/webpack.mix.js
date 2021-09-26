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

mix.options({ runtimeChunkPath: 'js/common' });

mix.js('resources/js/index.jsx', 'public/js/app.js')
   .react().version();

mix.extract(['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'axios', 'universal-cookie'], 'public/js/common/chunk.1.js')
   .extract(['@material-ui/core', '@material-ui/icons', '@material-ui/styles', '@emotion/react', '@emotion/styled'], 'public/js/common/chunk.2.js')
   .extract(['@popperjs/core', '@ckeditor/ckeditor5-build-classic', '@ckeditor/ckeditor5-react'], 'public/js/common/chunk.3.js')
   .extract({
      to: 'public/js/common/chunk.a.js'
   });