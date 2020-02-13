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
    it("welcomes user to the api", done => {
        chai
            .request(app)
            .get("/api/v1/incomes")
            .end((err, res) => {
                expect(res.body.message).to.equals("This is your income report");
                done();
            });
    })
})
