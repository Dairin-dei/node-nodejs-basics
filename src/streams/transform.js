import { Transform, pipeline } from 'stream';
import { createInterface } from 'readline';

export const transform = async () => {
  const input = process.stdin;
  const output = process.stdout;

  const transformLine = new Transform({
    transform(line, encr, callback) {
      this.push(line.toString().trim().split('').reverse().join('') + '\n');
      callback();
    },
  });

  console.log('print smth pls');
  pipeline(input, transformLine, output, (err) => {
    throw Error(err.message);
  });
};
transform();
