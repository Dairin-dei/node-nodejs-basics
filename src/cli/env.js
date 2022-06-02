export const parseEnv = () => {
  console.log(typeof process.env);
  for (let key in process.env) {
    if (key.slice(0, 4) === 'RSS_') {
      console.log(`${key}=`, process.env[key]);
    }
  }
};

parseEnv();
