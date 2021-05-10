const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(`Whats your password`, () => {
  console.log(`We saved your password!`);
  readline.question(
    `What do you want to do with this password?`,
    (reason: string) => {
      console.log(`What you want to do with it: ${reason}!`);
      readline.close();
    }
  );
});
