'use client'
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './header.module.css';

const Header = () => {
    const { data: session } = useSession();

    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/profile">Profile</Link></li>
                    {session && (
                        <li>
                            <button
                                className={styles.logoutButton}
                                onClick={() => signOut({ callbackUrl: '/' })}
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
