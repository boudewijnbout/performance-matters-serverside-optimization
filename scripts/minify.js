const postcss = require('postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const fs = require('fs');

// General CSS
fs.readFile('./public/css/style.css', async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;

  fs.writeFile('public/css/style.min.css', minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
});

// Header CSS
fs.readFile('public/css/header.css', async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;

  fs.writeFile('public/css/header.min.css', minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
});

// Detail CSS
fs.readFile('public/css/detail.css', async (err, data) => {
  const output = await postcss([cssnano, autoprefixer]).process(data);
  const minifiedCss = output.css;

  fs.writeFile('public/css/detail.min.css', minifiedCss, err => {
    if (err) {
      console.log(err);
    }
  })
});