const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

module.exports = async () => {
  try {
    fs.rmSync(path.resolve(__dirname, '../public/skeleton-elements'), {
      recursive: true,
      force: true,
    });
    fs.rmSync(path.resolve(__dirname, '../public/package'), {
      recursive: true,
      force: true,
    });
  } catch (err) {
    // err
  }

  await new Promise((resolve) => {
    exec(
      `cp -r ${path.resolve(
        __dirname,
        '../node_modules/skeleton-elements',
      )} ${path.resolve(__dirname, '../public/')}`,
      () => {
        resolve();
      },
    );
  });

  try {
    fs.renameSync(
      path.resolve(__dirname, '../public/skeleton-elements'),
      path.resolve(__dirname, '../public/package'),
    );
  } catch (err) {
    // error
  }
};
