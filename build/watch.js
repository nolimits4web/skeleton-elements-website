const fs = require('fs');
const path = require('path');
const buildPages = require('./build-pages');
const buildStyles = require('./build-styles');

console.log('Watching file changes ...');

let watchTimeout;
fs.watch(
  path.resolve(__dirname, '../src'),
  { recursive: true },
  (eventType, fileName) => {
    clearTimeout(watchTimeout);
    watchTimeout = setTimeout(() => {
      console.log(fileName);
      if (
        fileName.includes('.less') ||
        fileName.includes('.css') ||
        fileName.includes('.scss')
      ) {
        console.log('Building styles');
        buildStyles(() => {
          console.log('Building styles DONE');
        });
      } else if (fileName.includes('.html') || fileName.includes('.md')) {
        console.log('Building pages');
        buildPages();
      }
    }, 100);
  },
);
