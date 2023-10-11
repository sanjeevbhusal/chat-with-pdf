import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";

import { prisma } from "@/lib/prisma";
import { privateProcedure } from "./trpc";

const trpc = initTRPC.create();

const publicProcedure = trpc.procedure;
export const appRouter = trpc.router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = getUser();

    // This is just a additional check in case someone directly makes a api call to this resolver. But if someone goes through authentication flow, they will never make a call to this resolver if user is not present.
    if (!user || !user.id) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    const dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      await prisma.user.create({
        data: {
          id: user.id,
          email: user.email as string,
          name: user.given_name as string,
        },
      });
    }

    return { success: true };
  }),
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const user = ctx.user;

    const files = await prisma.file.findMany({
      where: {
        userId: user.id!,
      },
    });

    return { files };
  }),
});

export type AppRouter = typeof appRouter;
