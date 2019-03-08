const crypto = require('crypto'); 
const express = require('express');
const app = express();
const worker = require('webworker-threads').worker;

app.get('/', (req,res) => {

   const worker = new Worker(function() {

    this.onmessage = function() {
        let counter = 0;

        while(counter < 1e9) {

counter++;

        }

postMessage(counter);

    };

   });

worker.onmessage = function(myCounter) {
console.log(myCounter);
};

worker.postMessage();
    });
 


app.get('/fast', (req,res) => {
        res.send('hello Fast...');
    })

app.listen(8080 , () => {
    console.log('server running at port 8080....')
});

