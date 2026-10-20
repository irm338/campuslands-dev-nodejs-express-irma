import test from 'node:test';
import assert from 'node:assert/strict';
import app from '../src/app.js';

test('GET /api/heroes responde JSON con una lista', async (context) => {
  const server = app.listen(0);
  await new Promise((resolve) => server.once('listening', resolve));
  context.after(() => new Promise((resolve, reject) => {
    server.close((error) => error ? reject(error) : resolve());
  }));

  const response = await fetch(`http://127.0.0.1:${server.address().port}/api/heroes`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { data: [{ id: 1, name: 'Ayla', class: 'mage' }] });
});
