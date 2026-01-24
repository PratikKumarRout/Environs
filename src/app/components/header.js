'use client'

import styles from "./styles/header.module.css";

export default function Header({ location }) {

    return <section className={styles.header}>
       <div className={styles.searchSection}> 
        <p id={styles.title}> {location} </p>
            <p id={styles.location}>Balasore</p>
            <button id={styles.searchButton}>🔍</button>
        </div>
    </section>;
}