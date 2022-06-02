import { access, readdir } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const list = async () => {
  const dirName = dirname(fileURLToPath(import.meta.url));
  const currentPath = join(dirName, 'files');
  access(currentPath, (err) => {
    if (err && err.code === 'ENOENT') {
      throw Error('FS operation failed');
    }
    readdir(currentPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        throw Error(err.message);
      }
      files.forEach((file) => {
        console.log(file.name);
      });
    });
  });
};
list();
