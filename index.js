require("express-group-routes");
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


app.group("/api/v1", router => {

    // Booking room
    router.post("/booking", Controller.store);

    // Confirming booking
    router.patch("/booking/:id", Controller.confirm);

    // Get booking code
    router.get("/check_in/:id", Controller.checkIn)

    // Get income report 
    router.get("/incomes", Controller.income)

    // Show all bookings
    router.get("/bookings", Controller.index)
});

app.get("/", (req, res) => {
    res.send("This is Hotel information system");
});

app.listen(port, () => console.log(`Listening from ${port}`));
