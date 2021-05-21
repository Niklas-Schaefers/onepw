import React from "react";
import styles from "./Credentials.module.css";

type CredientialProps = {
  service: string;
};

function Credential({ service }: CredientialProps): JSX.Element {
  return (
    <li className={styles.credential}>
      {service} <button>🔍</button> <button>❌</button>
      <button>🔧</button>
    </li>
  );
}

export default Credential;
