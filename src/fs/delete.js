import { access, rm } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

export const remove = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const currentFile = join(dirName, 'files', 'fileToRemove.txt');

  access(currentFile, (err) => {
    if (err === 'ENOENT') {
      throw Error('FS operation failed');
    }

    rm(currentFile, { recursive: true }, (err) => {
      if (err) {
        throw Error(err.message);
      }
    });
  });
};

remove();
