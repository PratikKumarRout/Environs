import styles from "./styles/splash.module.css";
import { useEffect, useRef } from "react";

function Splash({ onAnimationEnd }) {
    const titleRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;

        const handleAnimationEnd = () => {
            if (onAnimationEnd) {
                onAnimationEnd();
            }
        };

        if (titleElement) {
            titleElement.addEventListener('animationend', handleAnimationEnd);
            return () => titleElement.removeEventListener('animationend', handleAnimationEnd);
        }
    }, [onAnimationEnd]);

    return <>
        <div className={styles.container}>
            <p ref={titleRef} id={styles.title}>environs</p>
        </div>
    </>;
}

export default Splash;