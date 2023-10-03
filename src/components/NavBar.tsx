import Link from "next/link";
import { Button } from "./ui/button";



const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 ">
      <p className="text-lg font-semibold">PDF-Chat</p>
      <ul className="flex items-center gap-8 text-sm">
        <li className="text-gray-600">
          <Link href="/pricing">Pricing</Link>
        </li>
        <li className="text-gray-600">
          <Link href="/signin">Signin</Link>
        </li>
        <li>
          <Link href="/signup"><Button size="sm">Get Started</Button></Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
