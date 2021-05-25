import React from "react";
import styles from "./AppHeader.module.css";

type HeaderProps = {
  title: string;
  imageSrc: string;
};

function AppHeader({ title, imageSrc }: HeaderProps): JSX.Element {
  return (
    <div className={styles.AppHeader}>
      <img src={imageSrc} />
      <h1>{title}</h1>
    </div>
  );
}

export default AppHeader;
