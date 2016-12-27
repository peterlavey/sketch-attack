'use strict';
let http = require('http');
let express = require('express');
let app = express();

let PORT=Number(process.env.PORT || 3000);

app.use(express.static(__dirname+'/public'));
app.get('/', (req, res)=>res.sendFile('./public/index.html'));

app.listen(PORT);
console.log("Client running on port "+PORT);
