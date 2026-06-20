/**
 * Backend Integration Tests
 * Test API endpoints and database interactions
 */

const request = require('supertest');
const { app } = require('../server');

describe('API Health Checks', () => {
  it('GET /api/health should return 200', async () => {
    const res = await request(app)
      .get('/api/health')
      .expect(200);
    expect(res.body.status).toBe('ok');
  });

  it('GET /api/version should return version', async () => {
    const res = await request(app)
      .get('/api/version')
      .expect(200);
    expect(res.body.version).toBe('1.0.0');
  });

  it('GET / should return API overview', async () => {
    const res = await request(app)
      .get('/')
      .expect(200);
    expect(res.body.message).toBe('Pulse Backend API');
  });
});

describe('Error Handling', () => {
  it('GET /invalid-route should return 404', async () => {
    const res = await request(app)
      .get('/invalid-route')
      .expect(404);
    expect(res.body.error).toBeDefined();
  });
});

describe('Middleware', () => {
  it('should parse JSON requests', async () => {
    const res = await request(app)
      .post('/')
      .send({ test: 'data' })
      .expect(200);
  });

  it('should handle CORS', async () => {
    const res = await request(app)
      .get('/api/health')
      .expect(200);
    expect(res.headers['access-control-allow-origin']).toBeDefined();
  });
});
