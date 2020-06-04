const buildPages = require('./build-pages');
const buildStyles = require('./build-styles');

function build() {
  buildPages();
  buildStyles();
}

build();
