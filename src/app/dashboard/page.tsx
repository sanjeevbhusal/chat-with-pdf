import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { trpc } from "@/trpc/client";
import { useRouter } from "next/router";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  // What if the user is not logged in. Redirect the user to login page

  if (!user || !user.id) {
    redirect("/api/auth/login");
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // If the user is logged has logged in for the first time, persist them to the database.

  if (!dbUser) {
    redirect("/auth-callback?origin=dashboard");
  }

  return <Dashboard user={dbUser} />;
}
