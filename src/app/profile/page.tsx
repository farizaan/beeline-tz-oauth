"use client"
import { getSession, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import styles from './profile.module.css';
import {Metadata} from "next";

// export const metadata: Metadata = {
//     title: "Profile - Next Auth App",
//     description: "Profile page of next app",
//     openGraph: {
//         title: "Profile - Next Auth App",
//         description: "Profile page of next app",
//         images: ['/path-to-image.jpg'],
//         url: 'https://my-app.com',
//     },
// };
export default function ProfilePage() {
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
            <h1>Profile</h1>
            <img
                src={session?.user?.image || '/default-avatar.png'}
                alt={session?.user?.name || 'User Avatar'}
                className={styles.profileImage}
            />
            <p>Welcome, {session?.user?.name}</p>
        </div>
    );
}
