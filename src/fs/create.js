import { open, close, writeFile } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const create = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const dirName = dirname(fileName);
  const filePath = join(dirName, "/files/fresh.txt");
  open(filePath, "wx", (err, file) => {
    if (err && err.code === "EEXIST") {
      throw Error("File already exists");
    }
    writeFile(filePath, "I am fresh and young" + "\n", (err) => {
      if (err) {
        throw err;
      }
      close(file, (err) => {
        if (err) {
          throw err;
        }
      });
    });
  });
};

create();