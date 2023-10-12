"use client";

import { trpc } from "@/trpc/client";
import { File } from "@prisma/client";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import PdfListItem from "./PdfListItem";

interface PdfListProps {}

function PdfList({}: PdfListProps) {
  const utils = trpc.useContext();
  const { toast } = useToast();

  const getFilesQuery = trpc.getUserFiles.useQuery(undefined, {
    retry: false,
    onError: (_) => {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: (
          <ToastAction
            altText="Try again"
            onClick={() => {
              getFilesQuery.refetch();
            }}
          >
            Try again
          </ToastAction>
        ),
      });
    },
  });

  const deleteFileMutation = trpc.deleteFile.useMutation({
    onSuccess(_) {
      utils.getUserFiles.invalidate();
    },
    onError(_) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      deleteFileMutation.reset();
    },
  });

  if (deleteFileMutation.isLoading) {
    // show a loading spinner to the delete button in the pdf list item.
  }

  if (getFilesQuery.isLoading) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
          <h3 className="font-semibold text-xl">Fetching your PDFs</h3>
        </div>
      </div>
    );
  }

  if (!getFilesQuery.isLoading && getFilesQuery.data?.files.length === 0) {
    return (
      <div className="w-full mt-24 flex justify-center">
        <h3 className="font-semibold text-xl">
          You have not uploaded any PDF yet
        </h3>
      </div>
    );
  }

  return (
    <div>
      {getFilesQuery.data?.files.map((pdf) => {
        return (
          <PdfListItem
            key={pdf.id}
            pdf={pdf as unknown as File}
            onDelete={() => deleteFileMutation.mutate({ fileId: pdf.id })}
          />
        );
      })}
    </div>
  );
}

export default PdfList;
