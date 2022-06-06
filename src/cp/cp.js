import { spawn, fork } from 'child_process';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';
import { createInterface } from 'readline';
import { Readable } from 'stream';
import { stdout } from 'process';
import { pipeline } from 'stream';

export const spawnChildProcess = async (args) => {
  const childFileName = join(
    dirname(fileURLToPath(import.meta.url)),
    'files',
    'script.js'
  );

  const child = fork(childFileName, args);
};

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(
  'print some symbols/words pls with space between them, for example: 1 2 3 for start. After you may enter some other symbols/words. They will be transferred to child process. To stop program enter CLOSE'
);

rl.on('line', (line) => {
  spawnChildProcess(line.split(' '));
  rl.close();
});
