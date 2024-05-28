const cli = (args) => {
  const userArgs = args.slice(2);

  if (!userArgs.length) {
    throw new Error('Missing user arguments');
  }

  const commands = userArgs.map(flag => {
    if (!flag.startsWith('--filter=') && flag !== '--count') {
      throw new Error(`This flag is unknown : ${flag}`);
    }

    const [action, value] = flag.split('=');
    return { action, value };
  });

  return commands;
};
  

module.exports = cli;