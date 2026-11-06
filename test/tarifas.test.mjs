import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('config/tarifas.json define las tarifas basica y premium', () => {
  const tarifas = JSON.parse(readFileSync('config/tarifas.json', 'utf8'));
  assert.deepEqual(Object.keys(tarifas).sort(), ['basica', 'premium']);
});
