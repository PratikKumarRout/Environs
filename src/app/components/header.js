import styles from "./styles/header.module.css";

export default function Header({ location }) {
    return <section className={styles.header}>
        <h2 id={styles.title}>
            {location} 
        </h2>
    </section>;
}