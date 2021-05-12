import { printPassword } from "./utils/messages";
import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from "./utils/questions";
import { isMainPasswordValid } from "./utils/validation";

const start = async () => {
  let mainPassword = await askForMainPassword();
  while (!(await isMainPasswordValid(mainPassword))) {
    console.log("Is invalid");
    mainPassword = await askForMainPassword();
  }
  console.log("Is valid");

  const command = await chooseCommand();

  switch (command) {
    case "list":
      console.log("List Case");
      {
        const service = await chooseService(["Github", "Google", "Codewars"]);
        printPassword(service);
      }
      break;
    case "add":
      console.log("Add Case");
      {
        const newCredential = await askForCredential();
        console.log(newCredential);
      }

      break;
  }
};

start();
// const mainPassword = await askForMainPassword();
// if (!isMainPasswordValid(mainPassword)) {
//   console.log("Is invalid");
//   start(); //Recursion
// } else {
//   console.log("Is Valid");
// }
