import { Worker } from "worker_threads";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { cpus } from "os";

export const performCalculations = async () => {
  const arrWorkers = [];
  const fileWorker = join(dirname(fileURLToPath(import.meta.url)), "worker.js");

  for (let i = 0; i < cpus().length; i += 1) {
    const runWorker = new Promise((resolve, reject) => {
      const worker = new Worker(fileWorker, { workerData: i + 10 });
      worker.on("message", (msg) => {
        resolve({ status: "resolved", data: msg });
      });
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
    arrWorkers.push(runWorker);
  }
  const result = await Promise.all(arrWorkers);
  console.log(result);
};
performCalculations();
