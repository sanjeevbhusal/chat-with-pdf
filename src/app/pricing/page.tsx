import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const PricingPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="border-b">
        <MaxWidthWrapper>
          <NavBar />
        </MaxWidthWrapper>
      </div>
      <div className="flex gap-8">
        <Card className={cn("w-72")}>
          <CardHeader className="text-center">
            <CardTitle>Free</CardTitle>
            <CardDescription>For Hobby Projects</CardDescription>
          </CardHeader>
          <CardHeader className="text-center pt-0">
            <CardTitle className="text-4xl">$0</CardTitle>
            <CardDescription>per month</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>10 PDFs included</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>6 pages per PDF</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>5MB file size limit</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Mobile friendly interface</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Higher quality responses</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Priority support</p>
            </div>
          </CardContent>
        </Card>
        <Card className={cn("w-72")}>
          <CardHeader className="text-center">
            <CardTitle>Pro</CardTitle>
            <CardDescription>
              For large projects with higher needs
            </CardDescription>
          </CardHeader>
          <CardHeader className="text-center pt-0">
            <CardTitle className="text-4xl">$8</CardTitle>
            <CardDescription>per month</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-gray-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>30 PDFs included</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>6 pages per PDF</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>5MB file size limit</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Mobile friendly interface</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Higher quality responses</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-sky-500" />
              <p>Priority support</p>
            </div>
          </CardContent>
          <CardFooter>
            <p>Card Footerr</p>
          </CardFooter>
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default PricingPage;
