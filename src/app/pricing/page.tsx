import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import NavBar from '@/components/NavBar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { BsCheck2 } from 'react-icons/bs';
import { AiOutlineMinus } from 'react-icons/ai';
import { Separator } from '@/components/ui/separator';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

const PricingPage = () => {
  return (
    <div className="min-h-screen">
      <MaxWidthWrapper>
        <NavBar />
      </MaxWidthWrapper>
      <Separator />
      <MaxWidthWrapper className="mt-8">
        <div className="flex justify-center gap-8">
          <Card className={cn('w-72')}>
            <CardHeader className="text-center">
              <CardTitle>Free</CardTitle>
              <CardDescription>For Hobby Projects</CardDescription>
            </CardHeader>
            <CardHeader className="text-center pt-0">
              <CardTitle className="text-4xl">$0</CardTitle>
              <CardDescription>per month</CardDescription>
            </CardHeader>

            <Separator />

            <CardContent className="flex flex-col gap-4 text-gray-600 text-sm mt-8">
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <p>10 PDFs included</p>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <div className="flex items-center gap-2">
                  <p>6 pages per PDF</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      A single PDF can have maximum 6 pages.
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <div className="flex items-center gap-2">
                  <p>5MB file size limit</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      A single PDF size cannot exceed 5MB.
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <p>Mobile friendly interface</p>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <AiOutlineMinus size={20} />
                <div className="flex items-center gap-2">
                  <p>Higher quality responses</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      Less powerful Machine learning model will be used in Free
                      plan
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <AiOutlineMinus size={20} />
                <p>Priority support</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Signup</Button>
            </CardFooter>
          </Card>
          <Card className={cn('w-72 border-[#E53B5B] border-2 relative')}>
            <div className="bg-[#E53B5B] absolute right-[32%] -top-4 text-white p-2 rounded-lg text-xs">
              Most Popular
            </div>
            <CardHeader className="text-center">
              <CardTitle>Pro</CardTitle>
              <CardDescription>For Large Projects</CardDescription>
            </CardHeader>
            <CardHeader className="text-center pt-0">
              <CardTitle className="text-4xl">$8</CardTitle>
              <CardDescription>per month</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="flex flex-col gap-4 text-gray-600 text-sm mt-8">
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <p>30 PDFs included</p>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <div className="flex items-center gap-2">
                  <p>25 pages per PDF</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      A single PDF can have maximum 25 pages.
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <div className="flex items-center gap-2">
                  <p>15MB file size limit</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      A single PDF size cannot exceed 15MB.
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <p>Mobile friendly interface</p>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <div className="flex items-center gap-2">
                  <p>Higher quality responses</p>
                  <HoverCard>
                    <HoverCardTrigger>
                      <AiOutlineQuestionCircle />
                    </HoverCardTrigger>
                    <HoverCardContent className="w-[24]">
                      More powerful Machine learning model will be used in Pro
                      plan
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <BsCheck2 size={20} className="text-gray-500" />
                <p>Priority support</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Signup</Button>
            </CardFooter>
          </Card>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PricingPage;
