const crypto = require('crypto'); 
const express = require('express');
const app = express();

app.get('/', (req,res) => {
    crypto.pbkdf2('a','b',100000,512,'sha512', () => {
        res.send('hello');
    });
 
})


app.get('/fast', (req,res) => {
        res.send('hello Fast...');
    })

app.listen(8080 , () => {
    console.log('server running at port 8080....')
});

