import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { openAPI } from "better-auth/plugins";
import { prisma } from "../db/db";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: "user", // Default role for new sign-ups
        input: false, // Prevent users from setting their own role during sign-up
      },
    },
  },
  plugins: [openAPI()],
  baseURL: {
    allowedHosts: ["localhost:3000"],
  },
});
