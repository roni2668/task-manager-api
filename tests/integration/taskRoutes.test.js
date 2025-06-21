test('basic sanity check', () => {
  expect(1 + 1).toBe(2);
});

const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../app'); // Ensure your app is exported properly
const Task = require('../../models/Task');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

afterEach(async () => {
  await Task.deleteMany(); // clean database after each test
});

// ✅ Wrap your tests inside a describe block
describe('Task API Integration Tests', () => {
  it('should create a new task', async () => {
    const res = await request(app).post('/api/tasks').send({
      title: 'Integration Test Task',
      description: 'Test description',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Integration Test Task');
  });

  it('should return all tasks', async () => {
    await Task.create({ title: 'Task1', description: 'Desc' });

    const res = await request(app).get('/api/tasks');

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBe(1);
  });

  it('should return a task by ID', async () => {
    const task = await Task.create({ title: 'FindMe', description: 'Look here' });

    const res = await request(app).get(`/api/tasks/${task._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('FindMe');
  });

  it('should update a task', async () => {
    const task = await Task.create({ title: 'Old Title', description: '...' });

    const res = await request(app).put(`/api/tasks/${task._id}`).send({
      title: 'Updated Title',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Title');
  });

  it('should delete a task', async () => {
    const task = await Task.create({ title: 'DeleteMe' });

    const res = await request(app).delete(`/api/tasks/${task._id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Task deleted successfully');
  });
});
