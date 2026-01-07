import NextAuth from "next-auth";
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import db from ".";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/login',
    },
    providers: [],
})