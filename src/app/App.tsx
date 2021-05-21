import React from "react";
import styles from "./App.module.css";
import AppHeader from "./components/AppHeader";
import Credential from "./components/Credential";

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <AppHeader
        title="One PW"
        imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsvgsilh.com%2Fpng-1024%2F575680.png&f=1&nofb=1"
      />
      <main>
        <ul>
          <Credential service="GitHub" />
          <Credential service="Google" />
        </ul>
      </main>
    </div>
  );
}

export default App;
