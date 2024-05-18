import { authOption } from "@/lib/auth-obtion";
import NextAuth from "next-auth/next";


const handleAuth = NextAuth(authOption)

export { handleAuth as GET, handleAuth as POST }