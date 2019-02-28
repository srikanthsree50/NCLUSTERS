process.env.UV_THREADPOOL_SIZE = 1;

const cluster = require('cluster');
const crypto = require('crypto');
if(cluster.isMaster) {
cluster.fork();
}
else {
    console.log(cluster.isMaster);
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

}