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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  ChangeEvent,
  KeyboardEvent,
  KeyboardEventHandler,
  useState,
} from "react";
import { Textarea } from "./ui/textarea";
import { RiQuestionAnswerLine } from "react-icons/ri";

interface PdfViewerProps {
  file: File;
}

const availableHeights: { [key: number]: string } = {
  40: "h-[56px]",
  60: "h-[76px]",
  80: "h-[96px]",
  100: "h-[116px]",
  120: "h-[136px]",
  140: "h-[156px]",
};

const chatMessages = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum corrupti ea. Corrupti, non? Omnis nihil natus, quasi aliquam voluptatem recusandae suscipit quis, magni ut accusamus fugiat tempora ratione animi.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magnam cumque accusantium eos ab dolore quibusdam numquam, maxime sit labore a delectus esse optio. Porro, consectetur repudiandae minima eum omnis fugit est beatae reprehenderit, obcaecati voluptatem iste in doloremque possimus. Dolores cum assumenda dolorum voluptas. Nisi consequuntur consequatur distinctio, illo blanditiis id omnis doloribus repellendus. Aliquid perspiciatis fugit accusamus nostrum itaque distinctio eligendi voluptates quisquam mollitia illo provident velit quos, repudiandae quasi dignissimos reiciendis consequatur quidem cum odit error voluptate pariatur! Quas laudantium sapiente minus sequi ipsam reiciendis inventore suscipit cupiditate sint maiores laboriosam, ipsum voluptates, reprehenderit consequatur maxime at?",
  },
  {
    question:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, laudantium!",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe itaque sit, quae unde debitis quis dignissimos, accusamus inventore, voluptate consequuntur explicabo impedit eius veniam at tenetur ea repudiandae sint? Natus, sequi perspiciatis deleniti unde rerum ipsam iure quidem molestiae mollitia, error provident maiores. Odio corrupti ducimus id quam est. Beatae velit ab quod exercitationem aperiam iste accusamus dolorum, reprehenderit dolorem optio? Autem atque inventore, aliquam facilis vero deserunt nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa possimus repudiandae velit nostrum tenetur sapiente sed at illo explicabo!",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ut molestiae eaque harum iusto ullam nam minima maxime commodi, itaque et provident mollitia unde sapiente ipsa totam amet corporis quod officia nemo accusantium exercitationem deserunt! Repudiandae expedita doloremque veritatis consequuntur nemo, veniam est, aliquam amet dolorum illum sunt neque eligendi ea assumenda molestiae enim sapiente perferendis incidunt ad nam. Quisquam, libero! Modi amet explicabo, laboriosam animi quia sint odio architecto et totam voluptas nostrum ullam itaque distinctio id eaque! Magni maxime vitae cumque saepe est sequi consequatur ex et quia ipsum! Obcaecati quam eveniet nemo eos facilis dolores cupiditate at temporibus, similique reiciendis quo minima quas sapiente nobis veniam id, autem tempora cum minus reprehenderit, officia deserunt. Rem amet deleniti sit excepturi, earum totam modi molestias alias magnam delectus eius ipsum atque aliquam! Error, eos suscipit porro quas aperiam praesentium quae, aut consectetur placeat illum harum! Iste nesciunt inventore quod?",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum corrupti ea. Corrupti, non? Omnis nihil natus, quasi aliquam voluptatem recusandae suscipit quis, magni ut accusamus fugiat tempora ratione animi.",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero magnam cumque accusantium eos ab dolore quibusdam numquam, maxime sit labore a delectus esse optio. Porro, consectetur repudiandae minima eum omnis fugit est beatae reprehenderit, obcaecati voluptatem iste in doloremque possimus. Dolores cum assumenda dolorum voluptas. Nisi consequuntur consequatur distinctio, illo blanditiis id omnis doloribus repellendus. Aliquid perspiciatis fugit accusamus nostrum itaque distinctio eligendi voluptates quisquam mollitia illo provident velit quos, repudiandae quasi dignissimos reiciendis consequatur quidem cum odit error voluptate pariatur! Quas laudantium sapiente minus sequi ipsam reiciendis inventore suscipit cupiditate sint maiores laboriosam, ipsum voluptates, reprehenderit consequatur maxime at?",
  },
  {
    question:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, laudantium!",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi saepe itaque sit, quae unde debitis quis dignissimos, accusamus inventore, voluptate consequuntur explicabo impedit eius veniam at tenetur ea repudiandae sint? Natus, sequi perspiciatis deleniti unde rerum ipsam iure quidem molestiae mollitia, error provident maiores. Odio corrupti ducimus id quam est. Beatae velit ab quod exercitationem aperiam iste accusamus dolorum, reprehenderit dolorem optio? Autem atque inventore, aliquam facilis vero deserunt nam.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi culpa possimus repudiandae velit nostrum tenetur sapiente sed at illo explicabo!",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ut molestiae eaque harum iusto ullam nam minima maxime commodi, itaque et provident mollitia unde sapiente ipsa totam amet corporis quod officia nemo accusantium exercitationem deserunt! Repudiandae expedita doloremque veritatis consequuntur nemo, veniam est, aliquam amet dolorum illum sunt neque eligendi ea assumenda molestiae enim sapiente perferendis incidunt ad nam. Quisquam, libero! Modi amet explicabo, laboriosam animi quia sint odio architecto et totam voluptas nostrum ullam itaque distinctio id eaque! Magni maxime vitae cumque saepe est sequi consequatur ex et quia ipsum! Obcaecati quam eveniet nemo eos facilis dolores cupiditate at temporibus, similique reiciendis quo minima quas sapiente nobis veniam id, autem tempora cum minus reprehenderit, officia deserunt. Rem amet deleniti sit excepturi, earum totam modi molestias alias magnam delectus eius ipsum atque aliquam! Error, eos suscipit porro quas aperiam praesentium quae, aut consectetur placeat illum harum! Iste nesciunt inventore quod?",
  },
];

function PdfViewer({ file }: PdfViewerProps) {
  const [textareaHeight, setTextareaHeight] = useState(40);
  const [value, setValue] = useState("");
  const [totalEnter, setTotalEnter] = useState(0);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    // If the only value in the entire textbox is "\n" (Enter), then we can ignore it.
    if (event.target.value === "\n") {
      return;
    }

    setValue(event.target.value);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLTextAreaElement>) {
    const pressedKey = event.key;
    const shiftPressed = event.shiftKey;

    if (pressedKey === "Enter" && !shiftPressed) {
      // make a api call.
      setValue("");
      setTextareaHeight(40);
    }

    if (pressedKey == "Enter" && shiftPressed) {
      setTotalEnter(totalEnter + 1);

      if (textareaHeight === 140) return;

      setTextareaHeight(textareaHeight + 20);
    }

    if (pressedKey == "Backspace") {
      // When the user presses backspace, should you decrease the height of the text-area element.

      if (value.charAt(value.length - 1) === "\n") {
        console.log(totalEnter);
        if (totalEnter <= 5) {
          setTextareaHeight(textareaHeight - 20);
        }

        setTotalEnter(totalEnter - 1);
      }
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="border-b h-16 p-4 flex justify-between items-center">
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
      </div>

      <div className="flex h-[calc(100vh-64px)]">
        <div className="w-1/2 px-4 py-2 flex flex-col items-center gap-4">
          <p className="text-lg">{file.name}</p>
          <div className="border-black border grow w-full flex items-center justify-center">
            PDF Placeholder
          </div>
        </div>
        <div>
          <Separator orientation="vertical" className="w-[2px] bg-black" />
        </div>
        <div className="w-1/2 flex flex-col justify-between py-2 gap-6">
          <div className="overflow-auto">
            {chatMessages.map((message) => {
              return (
                <>
                  <div className="py-2 border-b-black border-b px-4 flex gap-4">
                    <Avatar className="w-6 h-6 rounded-md">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{message.question}</p>
                  </div>
                  <div className="py-2 border-b-black border-b px-4 flex gap-4">
                    <Avatar className="w-6 h-6 rounded-md">
                      <AvatarFallback>
                        <RiQuestionAnswerLine />
                      </AvatarFallback>
                    </Avatar>
                    <p>{message.answer}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="px-4">
            <Textarea
              placeholder="Ask your question here."
              className={`mt-auto border-black focus:border-none resize-none ${availableHeights[textareaHeight]} py-4`}
              onKeyDown={handleKeyDown}
              onChange={handleChange}
              value={value}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PdfViewer;
