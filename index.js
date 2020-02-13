const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "*");
    res.header("Access-Control-Allow-Method", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

const Controller = require("./controllers/orders");

// Booking room
app.post("/api/v1/booking", Controller.store);

// Confirming booking
app.patch("/api/v1/booking/:id", Controller.confirm);

// Get booking code
app.get("/api/v1/check_in/:id", Controller.checkIn)

// Get income report 
app.get("/api/v1/incomes", Controller.income)

// Show all bookings
app.get("/api/v1/bookings", Controller.index)


app.get("/", (req, res) => {
    res.send("This is Hotel information system");
});

app.listen(port, () => console.log(`Listening from ${port}`));

module.exports = app