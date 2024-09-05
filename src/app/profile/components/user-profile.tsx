'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import styles from '../profile.module.css';

export default function UserProfile() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        redirect('/auth');
        return null;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome, {session.user?.name}</h1>
            <p className={styles.paragraph}>Email: {session.user?.email}</p>
            <img
                className={styles.avatar}
                src={session.user?.image || ''}
                alt={session.user?.name || 'User Avatar'}
            />
        </div>
    );
}
