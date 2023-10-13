"use client";

import { Progress } from "@/components/ui/progress";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";
import { useUploadThing } from "@/lib/uploadthing";
import { useRouter } from "next/navigation";
import { trpc } from "@/trpc/client";
import { useToast } from "./ui/use-toast";
import { AiOutlineCheck } from "react-icons/ai";

function UploadButton() {
  const [file, setFile] = useState<File | null>(null);
  const { startUpload } = useUploadThing("imageUploader");
  const [progress, setProgress] = useState(0);
  const getFileMutation = trpc.getFile.useMutation({
    onSuccess: (file) => {
      router.push(`/dashboard/${file.id}`);
    },
    onError: (err) => {
      console.log("Polling Error ==>", err);
    },
    retry: 5,
    retryDelay: 500,
  });
  const [dialogOpen, setDialogOpen] = useState(false)

  const router = useRouter();
  const { toast } = useToast();

  async function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    const file = files?.item(0) as File;
    setFile(file);

    // increment the progress bar every 5 second. But donot let it cross 90 %
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          return prev;
        }

        return prev + 5;
      });
    }, 500);

    // start uploading the document
    const response = await startUpload([file]);

    if (!response) {
      setDialogOpen(false)
      setFile(null);
      setProgress(0)
      return toast({
        title: "Something went wrong",
        description: "Please try again later",
      });
    }

    // file is uploaded but we can't be sure if it is processed or not. Hence, we will do polling.
    getFileMutation.mutate({ fileId: response[0].key });

    // stop the progress bar from incrementing and set it to 100%.
    clearInterval(interval);
    setProgress(100);
  }

  return (
    <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!dialogOpen)}>
      <DialogTrigger asChild>
        <Button>Upload PDF</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="h-[300px] relative">
          <label
            htmlFor="fileUpload"
            className="absolute cursor-pointer inset-0 flex items-center justify-center flex-col gap-2 px-4"
          >
            {getFileMutation.isLoading || getFileMutation.isSuccess ? (
              <>
                <div className="flex items-center gap-2">
                  <AiOutlineCheck className="text-green-400" size={20} />
                  <span>PDF Upload Complete</span>
                </div>
                <span className="font-bold text-lg">
                  Hold on, You are being redirected..
                </span>
              </>
            ) : (
              <>
                {!file ? (
                  <>
                    <div className="flex flex-col items-center gap-2">
                      <span>Drop your files here</span>
                    </div>
                    <span className="text-sm text-gray-500">(5MB Max)</span>
                  </>
                ) : null}
                <span className="text-sm font-semibold">{file?.name}</span>
                {file ? <Progress value={progress} /> : null}
              </>
            )}
          </label>
          <input
            id="fileUpload"
            type="file"
            multiple={false}
            onChange={handleChange}
            className="hidden"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default UploadButton;
