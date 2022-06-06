import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createInterface } from 'readline';

export const write = async () => {
  const fileOutput = join(
    dirname(fileURLToPath(import.meta.url)),
    'files',
    'fileToWrite.txt'
  );

  const outputFile = createWriteStream(fileOutput);

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log('print smth pls');

  rl.on('line', (line) => {
    outputFile.write(line + '\n');
    rl.close();
  });
};

write();
