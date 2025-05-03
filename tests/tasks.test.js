const request = require("supertest");

const app = require("../src/index");

describe(`GET /health`, () => {
    it(`should return stats OK`, async() => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status:"OK" });
    });
});

