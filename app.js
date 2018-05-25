var express = require('express');

var app = express();

app.set("view engine","jade");

app.use(express.static("assets"));

app.get("/",function(solicitud,respuesta){
	respuesta.render("index");
});

app.listen(8080);