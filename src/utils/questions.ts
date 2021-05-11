import inquirer from "inquirer";

export const askForMainPassword = (): Promise<string> => {
  return inquirer
    .prompt<{ mainPassword: string }>([
      {
        type: "password",
        name: "mainPassword",
        message: "Enter main password (⊙ｏ⊙)",
      },
    ])
    .then((answers) => answers.mainPassword);
};

// export const askForMainPassword = (): Promise<string> => {
//     return inquirer
//       .prompt<{ mainPassword: string }>([
//         {
//           type: "password",
//           name: "mainPassword",
//           message: "Enter main password (⊙ｏ⊙)",
//         },
//       ])
//       .then((answers) => answers.mainPassword);
//   };
