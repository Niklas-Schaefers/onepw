import { readCredentials, saveCredentials } from "./utils/credentials";
import { printPassword } from "./utils/messages";
import {
  askForCredential,
  askForMainPassword,
  chooseCommand,
  chooseService,
} from "./utils/questions";
import {
  isMainPasswordValid,
  isServiceCredentialInDB,
} from "./utils/validation";

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
      {
        const credentials = await readCredentials();
        const credentialServices = credentials.map(
          (credential) => credential.service
        );
        const service = await chooseService(credentialServices);
        const selectedService = credentials.find(
          (credential) => credential.service === service
        );

        console.log(selectedService);
        printPassword(service);
      }
      break;
    case "add":
      console.log("Add Case");
      {
        const newCredential = await askForCredential();

        const existsInDb = await isServiceCredentialInDB(newCredential);
        if (existsInDb) {
          console.log("Credential already exists.");
        }
        await saveCredentials(newCredential);
        console.log(
          `Service: ${newCredential.service} with Username: ${newCredential.username} is saved in database`
        );
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
