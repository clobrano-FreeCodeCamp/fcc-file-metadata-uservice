var express = require("express");
var bodyparser = require("body-parser");
var upload = require("multer")();
var fs = require("fs");
const app = express();

app.use(bodyparser.urlencoded({'extended': true}));

app.get('/', (req, rsp) => {
    rsp.sendFile(__dirname + '/index.html');
});

app.post('/get-file-size', upload.single('datafile'), (req, rsp) => {
    if (!req.file) rsp.send(500);
    rsp.send({'size': req.file.size});
});

app.listen(process.env.PORT, function () {
  console.log('App listening on port ' + process.env.PORT + '!')
});