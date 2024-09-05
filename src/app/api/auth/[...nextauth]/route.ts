import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    debug: true,
    pages: {
        signIn: '/auth',  // Страница для авторизации
        callbackUrl: '/profile', // Страница для перенаправления после входа
    },
    // callbacks: { async redirect({ url, baseUrl }) { return url }, }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };