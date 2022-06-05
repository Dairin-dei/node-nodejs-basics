export const parseArgs = () => {
  const args = process.argv;
  for (let key in args) {
    if (args[key].slice(0, 2) === "--") {
      console.log(args[key].slice(2), "is", args[String(Number(key) + 1)]);
    }
  }
};
parseArgs();
