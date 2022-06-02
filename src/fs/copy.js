import { access, copyFile, mkdir, readdir, rm } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

export const copy = async () => {
  const fileName = fileURLToPath(import.meta.url);
  const destinationFolder = join(dirname(fileName), "files_copy");
  const sourceFolder = join(dirname(fileName), "files");

  const copyFolder = async (previousPath, futurePath) => {
    readdir(previousPath, { withFileTypes: true }, (err, files) => {
      files.forEach((file) => {
        if (file.isDirectory()) {
          const newPath = join(futurePath, file.name);
          mkdir(newPath, { recursive: true }, (err) => {
            if (err) {
              throw err;
            }
            copyFolder(
              join(previousPath, file.name),
              join(futurePath, file.name)
            );
          });
        } else {
          copyFile(
            join(previousPath, file.name),
            join(futurePath, file.name),
            (err) => {
              if (err) {
                throw Error(err.message);
              }
            }
          );
        }
      });
    });
  };

  access(sourceFolder, (err) => {
    if (err && err.code === "ENOENT") {
      throw Error("Source folder doesn't exists");
    }
    access(destinationFolder, (err) => {
      if (err && err.code === "ENOENT") {
        mkdir(destinationFolder, { recursive: true }, (err) => {
          if (err) {
            throw err;
          }
          copyFolder(sourceFolder, destinationFolder);
        });
      } else {
        /* rm(destinationFolder, { recursive: true }, (err) => {
          if (err) {
            throw Error(err.message);
          }
          mkdir(
            join(destinationFolder, "files"),
            { recursive: true },
            (err) => {
              if (err) {
                throw err;
              }
              copyFolder(sourceFolder, join(destinationFolder, "files"));
            }
          );
        }); */ //remove
        throw Error("Destination folder already exists"); //remove
      }
    });
  });
};
copy();
