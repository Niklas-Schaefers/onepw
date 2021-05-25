import dotenv from "dotenv";
dotenv.config();

import express from "express";
import {
  deleteCredential,
  readCredential,
  readCredentials,
  saveCredentials,
} from "./utils/credentials";
import { connectDatabase } from "./utils/database";
import CryptoJS from "crypto-js";

if (process.env.MONGO_URL === undefined) {
  throw new Error("Missing env MONGO_URL");
}

const app = express();
const port = 5000;

app.use((_request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());

app.get("/api/credentials", async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

app.get("/api/credentials/:service", async (request, response) => {
  const credential = await readCredential(request.params.service);

  if (credential) {
    credential.password = CryptoJS.AES.decrypt(
      credential.password,
      "password"
    ).toString(CryptoJS.enc.Utf8);
  }
  response.json(credential);
});

app.post("/api/credentials", async (request, response) => {
  await saveCredentials(request.body);
  response.send(`Added "${request.body.service}" to list`);
});

app.delete("/api/credentials/:service", async (request, response) => {
  await deleteCredential(request.params.service);
  response.send(`${request.params.service} is deleted `);
});

connectDatabase(process.env.MONGO_URL).then(() => {
  console.log(`Database connected`);
  app.listen(port, () => {
    console.log(`onepw listening at http://localhost:${port}`);
  });
});
