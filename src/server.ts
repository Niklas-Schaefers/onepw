import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { readCredentials, deleteCredential } from "./utils/credentials";
import { connectDatabase } from "./utils/database";

if (process.env.MONGO_URL === undefined) {
  throw new Error("Missing env MONGO_URL");
}

const app = express();
const port = 5000;

app.get("/api/credentials", async (_request, response) => {
  const credentials = await readCredentials();
  response.json(credentials);
});

app.post("/api/credentials", (_request, response) => {
  response.send("Add new credentials");
});

app.delete("/api/credentials", async (request, response) => {
  await deleteCredential(request);
  response.send("Delete credentials");
});

connectDatabase(process.env.MONGO_URL).then(() => {
  console.log(`Database connected`);
  app.listen(port, () => {
    console.log(`onepw listening at http://localhost:${port}`);
  });
});
