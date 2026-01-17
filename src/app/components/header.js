import styles from "./styles/header.module.css";

export default function Header({ location }) {
    return <section className={styles.header}>
        <p id={styles.title}>
            {location} </p>
        <form>
            <input type="text"></input>
        </form>
    </section>;
}