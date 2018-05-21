'use strict';
const postcss = require('@stencil/postcss');
const autoprefixer = require('autoprefixer');
const sass = require('@stencil/sass');

exports.config = {
  namespace: 'design-system',
  outputTargets: [
    {
      type: 'dist',
      dir: '../../node_modules/@shared/design-system'
    },
    {
      type: 'www'
    }
  ],
  enableCache: true,
  plugins: [
    sass({
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
