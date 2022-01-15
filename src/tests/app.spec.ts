import request from "supertest";
import app from "../app";

describe("Server", () => {
    describe("Image Processing REST API", () => {
        it("expect app to be defined", () => {
            expect(app).toBeDefined();
        });

        it("expect server to return 200 for route: /", (done) => {
            request(app)
                .get("/")
                .expect(200)
                .end((err) => (err ? done.fail(err) : done()));
        });

        it("expect server to return 404 Not Found for undefined route", (done) => {
            request(app)
                .get("/not-existing-route")
                .expect(404)
                .end((err) => (err ? done.fail(err) : done()));
        });
    });
});