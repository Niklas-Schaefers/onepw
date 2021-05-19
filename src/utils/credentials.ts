import type { CredentialType } from "../types";
import CryptoJS from "crypto-js";
import { getCredentialsCollection } from "./database";

export const readCredentials = async (): Promise<CredentialType[]> => {
  return await getCredentialsCollection().find().sort({ service: 1 }).toArray();
};

export const saveCredentials = async (
  newCredential: CredentialType
): Promise<void> => {
  newCredential.password = CryptoJS.AES.encrypt(
    newCredential.password,
    "password"
  ).toString();
  await getCredentialsCollection().insertOne(newCredential);
};

export const deleteCredential = async (
  selectedCredential: string
): Promise<void> => {
  await getCredentialsCollection().deleteOne({
    service: selectedCredential,
  });
};
