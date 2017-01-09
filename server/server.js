'use strict';
let http = require('http');
let open = require('open');
let express = require('express');
let app = express();

let PORT=Number(process.env.PORT || 3000);

app.use(express.static(__dirname+'/public'));
app.get('/', (req, res)=>res.sendFile('./public/index.html'));

app.listen(PORT);
open('http://localhost:3000/');
console.log("Client running on port "+PORT);
