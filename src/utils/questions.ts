import inquirer from "inquirer";
import { Command, CredentialType } from "../types";

export const askForMainPassword = async (): Promise<string> => {
  const answers = await inquirer.prompt<{ mainPassword: string }>([
    {
      type: "password",
      name: "mainPassword",
      message: "Enter main password (⊙ｏ⊙)",
    },
  ]);
  return answers.mainPassword;
};

export const chooseCommand = async (): Promise<Command> => {
  const answers = await inquirer.prompt<{ command: Command }>({
    type: "list",
    name: "command",
    message: "What do you want to do?",
    choices: [
      { name: "List all credentials", value: "list" },
      { name: "Add credentials", value: "add" },
    ],
  });
  return answers.command;
};

export const chooseService = async (services: string[]): Promise<string> => {
  const answers = await inquirer.prompt<{ service: string }>({
    type: "list",
    name: "service",
    message: "Please choose your service",
    choices: services,
  });
  return answers.service;
};

export const askForCredential = async (): Promise<CredentialType> => {
  const answers = await inquirer.prompt<CredentialType>([
    {
      type: "input",
      name: "service",
      message: "Please enter service name",
    },
    {
      type: "input",
      name: "username",
      message: "Please enter username",
    },
    { type: "password", name: "password", message: "Please enter password" },
  ]);
  return answers;
};
