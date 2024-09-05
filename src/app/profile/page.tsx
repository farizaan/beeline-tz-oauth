
import styles from './profile.module.css';
import {Metadata} from "next";
import UserProfile from "@/app/profile/components/user-profile";

export const metadata: Metadata = {
    title: "Profile - Next Auth App",
    description: "Profile page of next app",
    openGraph: {
        title: "Profile - Next Auth App",
        description: "Profile page of next app",
        images: ['/path-to-image.jpg'],
        url: 'https://my-app.com',
    },
};
export default function ProfilePage() {


    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <UserProfile/>
        </div>
    );
}
