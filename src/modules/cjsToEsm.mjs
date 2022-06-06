import { dirname, sep } from 'path';
import { release, version } from 'os';
import { readFile } from 'fs';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

import { fileURLToPath } from 'url';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = require('./files/a.json');
} else {
  unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
