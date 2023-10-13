"use client";

import { File } from "@prisma/client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";


interface PdfViewerProps {
  file: File;
}

function PdfViewer({ file }: PdfViewerProps) {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <div className="border-b">
        <MaxWidthWrapper className="py-4 flex justify-between items-center">
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
      </div>
      <MaxWidthWrapper className="grow flex ">
        <div className="grow">
        </div>
        <div className="grow bg-green-500">Pdf Chat</div>
      </MaxWidthWrapper>
    </div>
  );
}

export default PdfViewer;
