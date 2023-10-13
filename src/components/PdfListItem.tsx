import { File } from "@prisma/client";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {BsThreeDotsVertical} from "react-icons/bs"
import Link from "next/link"

import { getRelativeDate } from "@/lib/utils";
import { useState } from "react";
interface PdfListItemProps {
  pdf: File;
  onDelete: () => void;
}

function PdfListItem({ pdf, onDelete }: PdfListItemProps) {
  return (
    <Link href={`/dashboard/${pdf.id}`}>
    <div className="flex items-center justify-between border rounded-md p-4 cursor-pointer">
      <p className="font-semibold text-sm">{pdf.name}</p>
      <p className="text-sm">
        <span className="text-xs text-gray-500">Last Opened:</span>{" "}
        {getRelativeDate(new Date(pdf.createdAt))}
      </p>
      <p className="ml-2 text-sm">
        <span className="text-xs text-gray-500 ">Total Pages:</span> 5
      </p>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">
            Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your pdf and all the conversation
              associated with it. This action cannot be undone
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
    </Link>
  );
}

export default PdfListItem;
