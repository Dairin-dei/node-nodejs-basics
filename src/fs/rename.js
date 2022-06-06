import fs, { access } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const rename = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const oldPath = join(dirName, 'files', 'wrongFilename.txt');
  const newPath = join(dirName, 'files', 'properFilename.md');
  console.log(oldPath);
  console.log(newPath);
  access(oldPath, (err) => {
    if (err && err.code === 'ENOENT') {
      throw Error('FS operation failed');
    }
    console.log(1);
    access(newPath, (err) => {
      if (err === null) {
        throw Error('FS operation failed');
      }
      console.log(2);
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          throw Error(err.message);
        }
      });
    });
  });
};

rename();
