const fs = require('fs');
const path = require('path');
const less = require('./less');
const cleanCSS = require('./clean-css');

module.exports = async () => {
  const lessContent = fs.readFileSync(
    path.resolve(__dirname, '../src/less/main.less'),
    'utf-8',
  );
  let cssContent;
  let cssMinifiedContent;
  try {
    cssContent = await less(lessContent);
    cssMinifiedContent = await cleanCSS(cssContent);
  } catch (err) {
    console.log(err);
  }
  fs.writeFileSync(
    path.resolve(__dirname, '../public/css/main.css'),
    cssMinifiedContent,
  );
};
