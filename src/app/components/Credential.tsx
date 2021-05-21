import React from "react";
import styles from "./Credentials.module.css";
import { CredentialType } from "../../types";

type CredientialProps = {
  credential: CredentialType;
};

function Credential({ credential }: CredientialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      <span>{credential.service}</span>
      <span>{credential.username}</span>
      <span>{credential.password}</span>
      <button>🔍</button> <button>❌</button>
      <button>🔧</button>
    </li>
  );
}

export default Credential;
