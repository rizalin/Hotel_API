const models = require("../models");
const Customer = models.customer;
const Booking = models.booking;
const Income = models.income_report;
const Check_in = models.check_in;
const RoomType = models.room_type


// Booking room
exports.store = (req, res) => {
    Booking.create(req.body).then(booking => {
        res.send({
            message: "success",
            booking
        })
    }).catch(err => res.send(err));;
};


// Confirm the payment for booking
exports.confirm = (req, res) => {
    Booking.update({ status: "Confirmed", attachment: req.body.attachment }, {
        where: { id: req.params.id }
    })
        // Input confirmed booking into check-in list
        .then(() => Booking.findOne({ where: { id: req.params.id } }))
        .then(() => Check_in.create({ booking_id: req.params.id, booking_code: CodeGenerator(), redeemed: false }))
        // Input confirmed booking into income report
        .then(() => Booking.findOne({ where: { id: req.params.id } }))
        .then(booking => Income.create({ booking_id: req.params.id, income: booking.total_price }))
        .then(income => res.send({ message: "success", income }))
        .catch(err => res.send(err));
};


// Get check-in code and information
exports.checkIn = (req, res) => {
    Check_in.findOne({
        where: { booking_id: req.params.id },
        include: [{
            model: Booking,
            as: "booking_info",
            attributes: ["id", "booked_by"],
            include: [{
                model: Customer,
                as: "customer_info",
                attributes: ["name"]
            }]
        }]
    }).then(event => res.send({ message: "This is your booking code", event })).catch(err => res.send(err));
};

// Get all income report
exports.income = (req, res) => {
    Income.findAll({
        attributes: ["booking_id", "income"]
    }).then(event => res.send({ message: "This is your income report", event })).catch(err => res.send(err));
};

// Get all booking information
exports.index = (req, res) => {
    Booking.findAll({
        include: [
            {
                model: Customer,
                as: "customer_info",
                attributes: ["name"]
            },
            {
                model: RoomType,
                as: "roomType",
                attributes: ["type"]
            }
        ]
    }).then(event => res.send({ message: "This is your all booking list", event })).catch(err => res.send(err));
};


// Generator for booking code
function CodeGenerator() {
    let charset = "1234567890qwertyuiopasdfghjklzxcvbnm"
    let text = ""
    for (j = 1; j <= 19; j++) {
        if (j % 5 == 0) {
            text += "-"
        }
        else { text += charset.charAt(Math.random() * charset.length) }
    }
    return text
}

