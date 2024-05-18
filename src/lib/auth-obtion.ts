import React from 'react'
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
          })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (!user) {
                token = { ...token, user: { ...token } };
            }
            return token;
        },

    },
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/profile"
    }
}

