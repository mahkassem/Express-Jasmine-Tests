import request from "supertest";
import app from "../app";

describe("Server", () => {
    describe("Express Jasmine Test", () => {
        it("expect app to be defined", () => {
            expect(app).toBeDefined();
        });

        it("expect server to return 200 for route: /", (done) => {
            request(app)
                .get("/")
                .expect(200)
                .end((err) => (err ? done.fail(err) : done()));
        });
    });
});