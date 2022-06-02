import { open, readFile } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

export const read = async () => {
  const dirName = dirname(fileURLToPath(import.meta.url));
  const fileName = join(dirName, 'files', 'fileToRead.txt');
  open(fileName, (err) => {
    if (err && err.code === 'ENOENT') {
      throw Error('FS operation failed');
    }
    readFile(fileName, (err, data) => {
      if (err) {
        throw Error(err.message);
      }
      console.log(data);
    });
  });
};
read();
