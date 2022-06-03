import { open, readFile } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

export const calculateHash = async () => {
  const file = join(
    dirname(
      fileURLToPath(import.meta.url),
      'files',
      'fileToCalculateHashFor.txt'
    )
  );

  const value = createHash('sha256').update(file).digest('hex');

  return value;
};

console.log(await calculateHash());
