const buildPages = require('./build-pages');
const buildStyles = require('./build-styles');
const copyPackage = require('./copy-package');

async function build() {
  await copyPackage();
  buildPages();
  buildStyles();
}

build();
