import fs from "fs/promises";
import type { CredentialType } from "../types";
import CryptoJS from "crypto-js";
import { getCollection } from "./database";

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
  newCredential.password = CryptoJS.AES.encrypt(
    newCredential.password,
    "password"
  ).toString();
  await getCollection("credentials").insertOne(newCredential);
};

export const deleteCredentials = async (
  selectedService: CredentialType
): Promise<void> => {
  const allCredentials = await readCredentials();
  const filteredCredentials = allCredentials.filter(
    (credential) => credential.service != selectedService.service
  );
  await fs.writeFile(
    "./db.json",
    JSON.stringify({ credentials: filteredCredentials }, null, 2),
    "utf-8"
  );
};
