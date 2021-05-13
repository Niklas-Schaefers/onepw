import fs from "fs/promises";
import type { CredentialType } from "../types";

type DB = {
  credentials: CredentialType[];
};

export const readCredentials = async (): Promise<CredentialType[]> => {
  const response = await fs.readFile("./db.json", "utf-8");
  const data: DB = JSON.parse(response);
  return data.credentials;
};

export const saveCredentials = async (
  newCredential: CredentialType
): Promise<void> => {
  const allCredentials = await readCredentials();
  allCredentials.push(newCredential);
  await fs.writeFile(
    "./db.json",
    JSON.stringify({ credentials: allCredentials }),
    "utf-8"
  );
};
