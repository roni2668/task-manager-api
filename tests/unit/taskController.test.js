const taskController = require('../../controllers/taskController');
const Task = require('../../models/Task');

jest.mock('../../models/Task'); // Mock the Task model

// Mock response object
const mockRes = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

test('Dummy test to verify Jest setup', () => {
  expect(1 + 1).toBe(2);
});

// ✅ getTasks
describe('getTasks', () => {
  it('should return all tasks with status 200', async () => {
    const req = {};
    const res = mockRes();

    const mockTasks = [
      { title: 'Task 1', description: 'Test 1' },
      { title: 'Task 2', description: 'Test 2' }
    ];

    Task.find.mockResolvedValue(mockTasks);
    await taskController.getTasks(req, res);

    expect(Task.find).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTasks);
  });

  it('should return 500 on DB error', async () => {
    const req = {};
    const res = mockRes();

    Task.find.mockRejectedValue(new Error('DB error'));
    await taskController.getTasks(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'DB error' });
  });
});

// ✅ getTaskById
describe('getTaskById', () => {
  it('should return a task with status 200', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();
    const mockTask = { _id: '123', title: 'Task' };

    Task.findById.mockResolvedValue(mockTask);
    await taskController.getTaskById(req, res);

    expect(Task.findById).toHaveBeenCalledWith('123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });

  it('should return 404 if not found', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();

    Task.findById.mockResolvedValue(null);
    await taskController.getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task not found' });
  });

  it('should return 500 on error', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();

    Task.findById.mockRejectedValue(new Error('Error fetching'));
    await taskController.getTaskById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Error fetching' });
  });
});

// ✅ createTask
describe('createTask', () => {
  it('should create and return a task with status 201', async () => {
    const req = { body: { title: 'New Task' } };
    const res = mockRes();

    const mockTask = { _id: '123', title: 'New Task' };

    const mockSave = jest.fn().mockResolvedValue(mockTask);
    const MockTaskConstructor = function () {
      return { save: mockSave };
    };

    Task.mockImplementation(MockTaskConstructor);

    await taskController.createTask(req, res);

    expect(Task).toHaveBeenCalledWith(req.body);
    expect(mockSave).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(mockTask);
  });

  it('should return 400 on save error', async () => {
    const req = { body: { title: 'Fail Task' } };
    const res = mockRes();

    const mockSave = jest.fn().mockRejectedValue(new Error('Save failed'));
    Task.mockImplementation(() => ({ save: mockSave }));

    await taskController.createTask(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Save failed' });
  });
});

// ✅ updateTask
describe('updateTask', () => {
  it('should update task and return 200', async () => {
    const req = { params: { id: '123' }, body: { title: 'Updated' } };
    const res = mockRes();
    const updated = { _id: '123', title: 'Updated' };

    Task.findByIdAndUpdate.mockResolvedValue(updated);
    await taskController.updateTask(req, res);

    expect(Task.findByIdAndUpdate).toHaveBeenCalledWith('123', { title: 'Updated' }, { new: true });
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(updated);
  });

  it('should return 400 on update error', async () => {
    const req = { params: { id: '123' }, body: {} };
    const res = mockRes();

    Task.findByIdAndUpdate.mockRejectedValue(new Error('Update error'));
    await taskController.updateTask(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Update error' });
  });
});

// ✅ deleteTask
describe('deleteTask', () => {
  it('should delete and return 200', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();

    Task.findByIdAndDelete.mockResolvedValue({ _id: '123' });
    await taskController.deleteTask(req, res);

    expect(Task.findByIdAndDelete).toHaveBeenCalledWith('123');
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task deleted successfully' });
  });

  it('should return 404 if task not found', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();

    Task.findByIdAndDelete.mockResolvedValue(null);
    await taskController.deleteTask(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: 'Task not found' });
  });

  it('should return 500 on delete error', async () => {
    const req = { params: { id: '123' } };
    const res = mockRes();

    Task.findByIdAndDelete.mockRejectedValue(new Error('Delete error'));
    await taskController.deleteTask(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Delete error' });
  });
});
