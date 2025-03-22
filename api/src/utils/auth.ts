// src/utils/auth.ts
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db"; // Adjust the path as needed
import { account, user, verification, session } from "../schema";
// import { users } from "../db/schema";
import { oAuthProxy } from "better-auth/plugins";
export const auth = betterAuth({
  // plugins:[oAuthProxy()],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      account: account,
      user,
      verification,
      session,
    },
  }),
  // hooks: {
  //   after(resp) {
  //     console.log(resp);
  //     return resp;
  //   },
  // },
  emailAndPassword: {
    enabled: true,
  },
  trustedOrigins: ["http://localhost:3001"],
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
});
