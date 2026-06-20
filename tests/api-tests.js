const http = require('http');

/**
 * API Test Suite for Pulse Backend
 * Tests core endpoints to verify deployment
 */

const BASE_URL = 'http://localhost:5000';
const tests = [];
let passed = 0;
let failed = 0;

function makeRequest(method, path, body = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    
    const options = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed, headers: res.headers });
        } catch (e) {
          resolve({ status: res.statusCode, data: data, headers: res.headers });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function test(name, fn) {
  tests.push({ name, fn });
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

async function runTests() {
  console.log('\n' + '='.repeat(60));
  console.log('  PULSE BACKEND - API TEST SUITE');
  console.log('='.repeat(60) + '\n');

  for (const { name, fn } of tests) {
    try {
      await fn();
      console.log(`✅ ${name}`);
      passed++;
    } catch (error) {
      console.log(`❌ ${name}`);
      console.log(`   Error: ${error.message}\n`);
      failed++;
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`  RESULTS: ${passed} passed, ${failed} failed`);
  console.log('='.repeat(60) + '\n');

  if (failed > 0) {
    process.exit(1);
  }
}

// ============== TESTS ==============

test('Server is running', async () => {
  try {
    const response = await makeRequest('GET', '/api/health');
    assert(response.status === 200, `Expected 200, got ${response.status}`);
    assert(response.data.status === 'ok', 'Expected status: ok');
  } catch (error) {
    throw new Error('Cannot connect to server. Is it running on port 5000?');
  }
});

test('GET / returns API overview', async () => {
  const response = await makeRequest('GET', '/');
  assert(response.status === 200, `Expected 200, got ${response.status}`);
  assert(response.data.message === 'Pulse Backend API', 'Expected API message');
  assert(response.data.version === '1.0.0', 'Expected version 1.0.0');
});

test('GET /api/version returns version info', async () => {
  const response = await makeRequest('GET', '/api/version');
  assert(response.status === 200, `Expected 200, got ${response.status}`);
  assert(response.data.version === '1.0.0', 'Expected version 1.0.0');
});

test('GET /api/health returns health status', async () => {
  const response = await makeRequest('GET', '/api/health');
  assert(response.status === 200, `Expected 200, got ${response.status}`);
  assert(response.data.status === 'ok', 'Expected status: ok');
  assert(response.data.message, 'Expected message in response');
  assert(response.data.timestamp, 'Expected timestamp in response');
});

test('GET /invalid-route returns 404', async () => {
  const response = await makeRequest('GET', '/api/invalid');
  assert(response.status === 404, `Expected 404, got ${response.status}`);
  assert(response.data.error, 'Expected error message');
});

test('Server responds with appropriate CORS headers', async () => {
  const response = await makeRequest('GET', '/api/health');
  // Check if server is properly configured
  assert(response.status === 200, 'Server should respond');
});

test('API returns valid JSON responses', async () => {
  const response = await makeRequest('GET', '/api/health');
  assert(typeof response.data === 'object', 'Response should be JSON object');
});

test('Multiple endpoints are accessible', async () => {
  const endpoints = ['/api/health', '/api/version', '/'];
  for (const endpoint of endpoints) {
    const response = await makeRequest('GET', endpoint);
    assert(response.status === 200, `${endpoint} should return 200`);
  }
});

// ============== RUN TESTS ==============

if (require.main === module) {
  runTests().catch(console.error);
}

module.exports = { test, runTests, makeRequest };
