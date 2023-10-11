"use client";

import { trpc } from "@/trpc/client";
import { File } from "@prisma/client";

interface PdfListProps {
  pdfList: File[];
}

function PdfList({ pdfList }: PdfListProps) {
  const { data, isLoading, error } = trpc.getUserFiles.useQuery(undefined, {
    retry: false,
  });

  console.log(data, isLoading, error);

  return (
    <div>
      {pdfList.map((pdf) => {
        return (
          <div
            key={pdf.id}
            className="h-64 w-64 flex items-center justify-center"
          >
            {pdf.name}
          </div>
        );
      })}
    </div>
  );
}

export default PdfList;
