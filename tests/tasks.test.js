const request = require("supertest");

const app = require("../src/index");

jest.setTimeout(10000);

describe(`GET /health`, () => {
    it(`should return stats OK`, async() => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ status:"OK" });
    });
});

describe(`GET /tasks`, () => {
    it(`should return all tasks`, async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('POST /tasks', () => {
    it('should create a new task', async () => {
        const newTask = {
            title: 'Test Task',
            description: 'Test description',
            status: 'in-progress'
        };
        
        const response = await request(app).post('/tasks').send(newTask);
        
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(newTask);
    });
});
