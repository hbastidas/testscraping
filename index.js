const tabletojson = require('tabletojson').Tabletojson;
var sanitizeHtml = require('sanitize-html');


const fs = require('fs');
const path = require('path');

const html = sanitizeHtml(fs.readFileSync(path.resolve(__dirname, 'index.html'), {encoding: 'UTF-8'}));
const converted = tabletojson.convert(html);
console.log(JSON.stringify(converted).replace("  ","").replace(" ",""));
