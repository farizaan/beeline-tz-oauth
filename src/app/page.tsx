import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.container}>
          <h1 className={styles.welcomeMessage}>Добро пожаловать в наше приложение!</h1>
          <Link href="/auth">
              <button className={styles.loginButton}>Войти</button>
          </Link>
      </div>
  );
}
