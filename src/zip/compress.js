import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { pipeline } from 'stream';

export const compress = async () => {
  const dirName = dirname(fileURLToPath(import.meta.url));
  const file = join(dirName, 'files', 'fileToCompress.txt');
  const outputFile = join(dirName, 'files', 'archive.gz');

  const gZip = createGzip();
  const readStream = createReadStream(file, 'utf-8');
  const writeStream = createWriteStream(outputFile);
  pipeline(readStream, gZip, writeStream, (err) => {
    if (err) {
      throw Error(err.message);
    }
  });
};
compress();
