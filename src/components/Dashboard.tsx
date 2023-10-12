import { User } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import UploadButton from "./UploadButton";
import PdfList from "./PdfList";

interface DashboardProps {
  user: User;
}

function Dashboard({ user }: DashboardProps) {
  return (
    <>
      <MaxWidthWrapper className="py-4 flex justify-between items-center border-b">
        <Link
          href="/"
          className="text-sm md:text-base lg:text-lg font-semibold"
        >
          PDF-Chat
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="ml-auto">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Upgrade</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="mt-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h1>Your PDFs</h1>
          <UploadButton />
        </div>
        <PdfList />
      </MaxWidthWrapper>
    </>
  );
}

export default Dashboard;
