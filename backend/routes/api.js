var express = require("express");
var authRouter = require("./auth");
var patientRouter = require("./patient");

var app = express();

app.use("/auth/", authRouter);
app.use("/patient/", patientRouter);

module.exports = app;
