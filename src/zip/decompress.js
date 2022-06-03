import { createReadStream, createWriteStream, open } from 'fs';
import { createGunzip } from 'zlib';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

export const decompress = async () => {
  const dirName = dirname(fileURLToPath(import.meta.url));

  const file = join(dirName, 'files', 'archive.gz');
  const outputFile = join(dirName, 'files', 'fileToCompress1.txt');

  open(outputFile, (err) => {
    if (err === null) {
      throw Error('File already exists');
    }
    if (err) {
      const unZip = createGunzip();
      const readStream = createReadStream(file);
      const writeStream = createWriteStream(outputFile);
      readStream.pipe(unZip).pipe(writeStream);
    }
  });
};
decompress();
