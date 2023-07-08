import styles from "../../../styles/IndustryLeadersCard.module.css";

export const IndustyLeadersCard = ({ name, role, profile }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImg}>{profile}</div>
      <p className={styles.title}>{name}</p>
      <p className={styles.subtitle}>{role}</p>
    </div>
  );
};
