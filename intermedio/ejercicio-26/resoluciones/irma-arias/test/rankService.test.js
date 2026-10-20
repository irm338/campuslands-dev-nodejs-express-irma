import test from 'node:test';
import assert from 'node:assert/strict';
import { getPlayerRank } from '../src/services/rankService.js';

test('asigna rango usando un repositorio simulado', () => {
  const fakeRepository = { findById: (id) => id === 'p1' ? { id: 'p1', name: 'Nova', score: 1200 } : null };
  assert.deepEqual(getPlayerRank('p1', fakeRepository), { id: 'p1', name: 'Nova', rank: 'oro' });
});

test('devuelve null cuando el jugador no existe', () => {
  assert.equal(getPlayerRank('missing', { findById: () => null }), null);
});
