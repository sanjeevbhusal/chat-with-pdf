import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import {prisma} from "@/lib/prisma"
import PdfViewer from "@/components/PdfViewer";

interface PageProps {
  params: {
    id: string;
  };
}

async function Page({ params: {id} }: PageProps) {
  const {getUser} = getKindeServerSession()
  const user = getUser();

  if (!user || !user.id) {
    redirect(`/auth-callback?origin=dashboard/${id}`)
  }

  const file = await prisma.file.findUnique({
    where: {
        id: id,
        userId: user.id 
    }
  })

  if (!file) {
    return notFound()
  }

  return <PdfViewer file={file} />
}

export default Page;
 