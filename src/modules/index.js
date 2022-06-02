import { createMyServer, unknownObject } from './cjsToEsm.mjs';
console.log(unknownObject);
createMyServer.listen(3333, () => {
  console.log('Application listening on port 3333!');
});
