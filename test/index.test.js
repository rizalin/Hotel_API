const app = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
    it("Showing booking code", done => {
        chai
            .request(app)
            .get("/api/v1/check_in/1")
            .end((err, res) => {
                expect(res.body.message).to.equals("This is your booking code");
                done();
            });
    })
    it("Showing income report", done => {
        chai
            .request(app)
            .get("/api/v1/incomes")
            .end((err, res) => {
                expect(res.body.message).to.equals("This is your income report");
                done();
            });
    })
    it("Showing all booking list", done => {
        chai
            .request(app)
            .get("/api/v1/bookings")
            .end((err, res) => {
                expect(res.body.message).to.equals("This is your all booking list");
                done();
            });
    })
    //     it("Booking room", done => {
    //         chai
    //             .request(app)
    //             .get("/api/v1/booking")
    //             .send({
    //                 booking_date: "2020-03-21",
    //                 room_type: 3,
    //                 total_room: 1,
    //                 total_price: 1200000,
    //                 status: "Pending",
    //                 booked_by: 1,
    //             })
    //             .end((err, res) => {
    //                 expect(res.body.message).to.equals("success");
    //                 done();
    //             });
    //     })
    //     it("Confirm booking", done => {
    //         chai
    //             .request(app)
    //             .get("/api/v1/booking/1")
    //             .send({ attachment: "linked" })
    //             .end((err, res) => {
    //                 expect(res.body.message).to.equals("success");
    //                 done();
    //             });
    //     })
})
