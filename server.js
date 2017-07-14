var multer = require("multer");
var express = require('express');
var app = express();
var upload = multer({ dest: "/tmp" });

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/size", upload.single('filefield'), function (request, response) {
  response.json({
    size: request.file.size
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
