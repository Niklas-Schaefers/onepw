import React from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader";
import Credential from "./components/Credential";
import { CredentialType } from "../types";

function App(): JSX.Element {
  const credentials: CredentialType[] = [
    {
      service: "GitHub",
      username: "Niklas",
      password: "123",
    },
    {
      service: "Google",
      username: "Nik",
      password: "312",
    },
    {
      service: "Facebook",
      username: "Las",
      password: "808",
    },
  ];

  const credentialElements = credentials.map((credential) => (
    <Credential key={credential.service} credential={credential} />
  ));

  return (
    <div className={styles.App}>
      <AppHeader
        title="One PW"
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsvgsilh.com%2Fpng-1024%2F575680.png&f=1&nofb=1"
      />
      <main>
        <ul className={styles.bla}>
          <li className={styles.blub}>
            <span>SERVICE</span>
            <span>USERNAME</span>
            <span>PASSWORD</span>
            <span className={styles.blablub}>SHOW</span>
            <span className={styles.blablub}>DELETE</span>
            <span className={styles.blablub}>EDIT</span>
          </li>
          {credentialElements}
        </ul>
      </main>
    </div>
  );
}

export default App;
