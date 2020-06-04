const fs = require('fs');
const path = require('path');
const glob = require('glob');
const minify = require('html-minifier').minify;
const pkg = require('../public/packages/core/package.json');
const md = require('./md');

module.exports = () => {
  const template = fs.readFileSync(
    path.resolve(__dirname, '../src/template.html'),
    'utf-8',
  );

  glob('**/*.md', { cwd: path.resolve(__dirname, '../src') }, (err, files) => {
    files.forEach((file) => {
      const fileContent = fs.readFileSync(
        path.resolve(__dirname, '../src', file),
        'utf-8',
      );
      const { vars, html } = md(fileContent);
      Object.assign(vars, {
        version: pkg.version,
        content: html,
      });

      let htmlContent = template;
      Object.keys(vars).forEach((varName) => {
        const re = new RegExp(`{{${varName}}}`, 'g');
        htmlContent = htmlContent.replace(re, vars[varName]);
      });
      htmlContent = minify(htmlContent, {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      });

      fs.writeFileSync(
        path.resolve(__dirname, '../public', file.replace(/.md/, '.html')),
        htmlContent,
      );
    });
  });
};
