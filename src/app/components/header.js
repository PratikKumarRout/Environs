import styles from "./styles/header.module.css";

export default function Header({ location }) {
    return <section className={styles.header}>
        <p id={styles.title}>
            {location} </p>
        <div className={styles.searchSection}>
            <p id={styles.location}> Balasore</p> 
            <p>🔍</p>
        </div>
    </section>;
}