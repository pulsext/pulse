/**
 * Backend Unit Tests
 * Test server setup and middleware
 */

const { app, io } = require('../server');

describe('Express App', () => {
  it('should be defined', () => {
    expect(app).toBeDefined();
  });

  it('should have middleware configured', () => {
    expect(app._router).toBeDefined();
  });

  it('should handle requests', () => {
    expect(typeof app).toBe('function');
  });
});

describe('Socket.IO', () => {
  it('should be initialized', () => {
    expect(io).toBeDefined();
  });

  it('should have event handlers', () => {
    expect(io.on).toBeDefined();
  });
});
