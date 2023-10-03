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

const PricingPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="border-b">
        <MaxWidthWrapper>
          <NavBar />
        </MaxWidthWrapper>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footerr</p>
        </CardFooter>
      </Card>
    </MaxWidthWrapper>
  );
};

export default PricingPage;
