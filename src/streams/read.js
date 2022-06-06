import { createReadStream } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

export const read = async () => {
  const fileName = join(
    dirname(fileURLToPath(import.meta.url)),
    'files',
    'fileToRead.txt'
  );

  const readon = createReadStream(fileName, 'utf-8');
  readon.on('data', (info) => {
    process.stdout.write(info);
  });
};

read();
