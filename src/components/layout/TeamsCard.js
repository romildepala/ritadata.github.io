import { useState, useEffect } from "react";
import styles from "../../../styles/TeamsCard.module.css";

export const TeamsCard = ({ name, role, profile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImg}>{profile}</div>
    </div>
  );
};
