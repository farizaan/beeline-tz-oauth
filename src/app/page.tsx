import styles from "./page.module.css";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Home - Next Auth App",
    description: "Home page of next app",
    openGraph: {
        title: "Home - Next Auth App",
        description: "Home page of next app",
        images: ['/next.svg'],
        url: 'https://my-app.com',
    },
};
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
