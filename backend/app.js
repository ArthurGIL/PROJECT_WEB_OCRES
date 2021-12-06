var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

const mongoose = require('mongoose');

// mongodb+srv://ArthurAPI:ArthurAPI@cluster0.4r6xf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const CONNECTION_URL = 'mongodb+srv://Arthur:arthurmp69@cluster0.cout0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true}, () => console.log('Database connected'));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;