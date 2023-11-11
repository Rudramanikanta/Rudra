import React from 'react'
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: "920265725462-ibkhdqj83l7d4e4snf4r0fi1am967sh5.apps.googleusercontent.com",
        clientSecret: "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",
      })
    ],
})
export { handler as GET, handler as POST }