import { Collection, MongoClient } from "mongodb";
import { CredentialType } from "../types";

let client: MongoClient;
export const connectDatabase = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
};

export const disconnectDatabase = (): Promise<void> => {
  return client.close();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getCredentialsCollection = (): Collection<CredentialType> => {
  return getCollection("credentials");
};
