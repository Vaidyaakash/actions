require('newrelic');
const express = require("express");


const app = express();

// Creating Middleware 1
const middleware1 = function (req, res, next) {
    console.log("middleware1");
    next();
};

// Creating Middleware 2
const middleware2 = function (req, res, next) {
    console.log("middleware2");
    next();
};

app.use(middleware2); // This middleware is applied globally

// Creating routes
app.get("/page1", middleware1, function (req, res) {
    res.send("<h1>this is contact page by using middleware 1</h1>");
});

app.get("/page2", middleware2, function (req, res) {
    res.send("<h1>this is page2 by using middleware 1</h1>");
});

app.get("/page3", function (req, res) {
    res.send(data_aakash);
});

app.get("/", function (req, res) {
    res.send("<h1>this is a home page by using middleware 2</h1>");
});

app.listen(4540, () => {
    console.log("Server is running on port 4540");
});
