const less = require('less');
const path = require('path');

module.exports = (
  content,
  resolvePath = path.resolve(__dirname, '../src/less'),
) =>
  new Promise((resolve, reject) => {
    less
      .render(content, { paths: [resolvePath] })
      .then((result) => {
        resolve(result.css);
      })
      .catch((err) => {
        reject(err);
        throw err;
      });
  });
