import request from "supertest";
const _server = require('./index');

describe("Testing the Get endpoint API", () => {

    it("tests our testing framework if it works", (done) => {
        request(_server)
            .get('/api/getData')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.statusCode).toEqual(200);
                done();
            })
    });
});

describe('"Testing the Post endpoint API"', () => {

    it('should create a new post', async () => {
        const res = await request(_server)
            .post('/api/insertData')
            .send({
                "first_name": "Test",
                "last_name": "Test",
                "emailid": "test@gmail.com"
            })
        expect(res.statusCode).toEqual(200);
    });

});