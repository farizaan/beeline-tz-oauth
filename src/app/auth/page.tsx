"use client"
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";
import styles from "./auth.module.css";

export default function SignInPage() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit =  (data: FormData) => {
        router.push('/profile');
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Sign In</h1>

            <div className={styles.oauthContainer}>
                <button
                    className={styles.oauthButton}
                    onClick={() => signIn('google', { callbackUrl: '/profile' })}
                >
                    Sign in with Google
                </button>
            </div>

            <div className={styles.separator}></div>

            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Email:
                    <input
                        type="email"
                        className={styles.input}
                        {...register('email', {required: "Email is required"})}
                    />
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        className={styles.input}
                        {...register('password', {required: "Email is required"})}
                    />
                    {errors.password && <p className={styles.error}>{errors.password.message}</p>}
                </label>

                <button type="submit" className={styles.submitButton}>
                    Sign In
                </button>
            </form>
        </div>
    );
}
