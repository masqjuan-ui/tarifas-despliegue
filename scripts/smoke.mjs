import { readFileSync } from 'node:fs';
const tarifas = JSON.parse(readFileSync('config/tarifas.json', 'utf8'));
const malas = Object.keys(tarifas).filter((k) => !(tarifas[k] > 0));
if (malas.length) { console.error(`Tarifas no válidas: ${malas.join(', ')}`); process.exit(1); }
console.log('Smoke test correcto');
