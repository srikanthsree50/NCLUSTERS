const https = require('https');
const start = Date.now();

function req() {
https.request('https://www.google.com', res => {
res.on('data', () => {});
res.on('end', () => {
console.log(Date.now() - start);
});
}).end();
}

req();
req();
req();
req();
req();