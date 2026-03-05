import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // You can set these in .env later
                const adminUsername = process.env.ADMIN_USERNAME || 'admin';
                const adminPassword = process.env.ADMIN_PASSWORD || 'iedcadmin';

                if (credentials?.username === adminUsername && credentials?.password === adminPassword) {
                    return { id: "1", name: "Admin" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "default_dev_secret_iedc_123",
};
