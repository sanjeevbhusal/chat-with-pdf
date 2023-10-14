import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { prisma } from "@/lib/prisma";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ pdf: { maxFileSize: "16MB" } })
    .middleware(async ({ req }) => {
      const { getUser } = getKindeServerSession();
      const user = getUser();

      if (!user || !user.id) {
        throw new Error("You must be logged in to upload files");
      }

      return user;
    })
    .onUploadComplete(async ({ metadata, file }) => {
      const f = await prisma.file.create({
        data: {
          id: file.key,
          name: file.name,
          userId: metadata.id as string,
          url: file.url,
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
