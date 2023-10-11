import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <>
      <div className="border-b">
        <MaxWidthWrapper>
          <NavBar
            kindeControls={
              <>
                <LoginLink className={buttonVariants({ variant: "link" })}>
                  Sign in
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({ variant: "default" })}
                >
                  Sign up
                </RegisterLink>
              </>
            }
          />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="mt-24 text-center max-w-3xl mx-auto px-4 md:px-0">
          <p className="text-4xl md:text-6xl">
            Find information from your{" "}
            <span className="text-red-500 font-semibold"> PDF documents </span>{" "}
            with just a question.
          </p>
          <p className="text-xs md:text-base text-gray-500 mt-8 tracking-wider">
            PDF-Chat lets you upload a document and run search queries against
            it. Its like having an expert reading the entire document and
            answering your questions.
          </p>
          <Link href="/signup">
            <Button className="mt-8" size="lg">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="mt-20">
          <h1 className="font-semibold text-2xl md:text-3xl text-center">
            Start chatting in just 3 steps
          </h1>
          <div className="flex items-center justify-between mt-16">
            <div className="border-b-2 pb-2">
              <p className="text-red-500 text-xs md:text-sm">Step 1</p>
              <p className="font-semibold mt-2 text-sm md:text-base">
                Create a account
              </p>
            </div>

            <div className="border-b-2 pb-2">
              <p className="text-red-500 text-xs md:text-sm">Step2</p>
              <p className="font-semibold mt-2 text-sm">Upload a PDF file</p>
            </div>
            <div className="border-b-2 pb-2">
              <p className="text-red-500 text-xs md:text-sm">Step 3</p>
              <p className="font-semibold mt-2 text-sm">
                Start asking questions
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
