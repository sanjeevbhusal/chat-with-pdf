"use client";

import { trpc } from "@/trpc/client";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const origin = searchParams.get("origin") || "dashboard";

  trpc.authCallback.useQuery(undefined, {
    onSuccess: () => {
      router.push(`/${origin}`);
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        router.push("/api/auth/login");
      }
    },
    retry: false,
  });

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
}
